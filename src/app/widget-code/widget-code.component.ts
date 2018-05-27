import { Component, OnInit, Input, ViewChild, ElementRef, forwardRef, Output, AfterViewInit, OnDestroy } from '@angular/core';
import * as CodeMirror from 'codemirror';
//import { NG_VALUE_ACCESSOR, MAX_LENGTH_VALIDATOR } from '@angular/forms';
import { EventEmitter } from 'events';
import { WidgetComponent } from '../widget/widget.component';
import { Project } from '../entity/project';
import { ProjectsService } from '../services/projects.service';
import { File } from '../entity/file';
import { ProgressesService } from '../services/progresses.service';
import { ExecutionConfig } from '../entity/execution-config';
//import { SSL_OP_SSLREF2_REUSE_CERT_TYPE_BUG } from 'constants';

@Component({
  selector: 'app-widget-code',
  templateUrl: './widget-code.component.html',
  styleUrls: ['./widget-code.component.css']
})


export class WidgetCodeComponent extends WidgetComponent implements OnInit {  

  output: String = 'Output window';
  relativeProject: Project;
  progressProjectID: String;
  files: File[];

  constructor(private projectService: ProjectsService, private progressesService: ProgressesService) {
    super();
  }

  ngOnInit() {
    this.projectService.getProject(this.widget.projectID).subscribe(pr => {
      this.relativeProject = pr;
      this.progressProjectID = "/api/progresses/myself/projects/" + this.widget.projectID.replace("/api/projects/", "");
      this.files = pr.files;
      this.files.forEach(f => {
        this.progressesService.getFileOfProgressProjects(this.progressProjectID, f.filename)
        .subscribe(f2 => {
          this.files[this.files.findIndex(f3 => f3.filename === f.filename)].content = f2;
        });
      });
    });
  }

  BuildAndRun(value: string): void {
    //Put of the file
    this.progressesService.putFileOfProgressProjects(this.progressProjectID,
      this.getExecutionConfig("RUN").mainFile, value).subscribe(() => {
        this.progressesService.buildProject(this.progressProjectID, "RUN").subscribe(res => {
          this.output = this.output.concat(res.compilationOutput.toString());
          this.progressesService.executeProject(this.progressProjectID, "RUN").subscribe(() => {
            console.log("Executing...");
            setInterval(() => {
              this.progressesService.pullStdout(this.progressProjectID).subscribe(cont => {
                this.output = this.output.concat(cont.toString());
                console.log("Pulled stdout");
              });
              this.progressesService.pullStderr(this.progressProjectID).subscribe(cont => {
                this.output = this.output.concat(cont.toString());
                console.log("Pulled stderr");
              });
            }, 100);
          });
        });
      });
  }

  getFile(): String {
    return this.files[this.files.findIndex(f3 => f3.filename === this.relativeProject.executionConfigs.find(
      ec => ec.name === "RUN"
    ).mainFile)].content;
  }

  getExecutionConfig(name: String): ExecutionConfig {
    return this.relativeProject.executionConfigs.find(ec => ec.name === name);
  }
}

