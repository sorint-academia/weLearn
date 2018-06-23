import { Component, OnInit, Input, ViewChild, ElementRef, forwardRef,
  Output, AfterViewInit, OnDestroy, ViewEncapsulation, AfterContentInit } from '@angular/core';
import * as CodeMirror from 'codemirror';
//import { NG_VALUE_ACCESSOR, MAX_LENGTH_VALIDATOR } from '@angular/forms';
import { EventEmitter } from 'events';
import { Observable } from 'rxjs';
import { WidgetComponent } from '../widget/widget.component';
import { Project } from '../entity/project';
import { ProjectsService } from '../services/projects.service';
import { File } from '../entity/file';
import { ProgressesService } from '../services/progresses.service';
import { ExecutionConfig } from '../entity/execution-config';
//import { SSL_OP_SSLREF2_REUSE_CERT_TYPE_BUG } from 'constants';a
@Component({
  selector: 'app-widget-code',
  templateUrl: './widget-code.component.html',
  styleUrls: ['./widget-code.component.css'],
  encapsulation: ViewEncapsulation.None
})

export class WidgetCodeComponent extends WidgetComponent implements OnInit {

  output = "";
  relativeProject: Project;
  progressProjectID: string;
  files: File[];
  pullerTimer: NodeJS.Timer;

  @ViewChild("code") txtCode;
  editor: CodeMirror.Editor;

  constructor(private projectService: ProjectsService, private progressesService: ProgressesService) {
    super();
  }

  ngOnInit() {
    this.projectService.getProject(this.widget.projectID).subscribe(pr => {
      this.relativeProject = pr;
      this.progressProjectID = "/api/progresses/myself/projects/" + this.widget.projectID.replace("/api/projects/", "");
      this.files = pr.files;
      this.files.map(f => {
          const observable = this.progressesService.getFileOfProgressProjects(this.progressProjectID, f.filename);
          observable.subscribe(f2 => {
            this.files[this.files.findIndex(f3 => f3.filename === f.filename)].content = f2;
          });
          return observable;
        })
        .reduce((all, obs) =>  all.concat(obs))
        .subscribe(() => this.initCodeMirror());
    });
  }

  initCodeMirror() {
    this.editor = CodeMirror.fromTextArea(this.txtCode.nativeElement, {
      lineNumbers: true,
      mode: "java"
    });
    this.editor.setValue(this.getFile());
  }

  BuildAndRun(): void {
    const value = this.editor.getValue();

    //Put of the file
    this.output = "";
    if (this.pullerTimer) {
      clearInterval(this.pullerTimer);
    }
    this.progressesService.putFileOfProgressProjects(this.progressProjectID,
      this.getExecutionConfig("RUN").mainFile, value).subscribe(() => {
        this.progressesService.buildProject(this.progressProjectID, "RUN").subscribe(res => {
          this.output = this.output.concat(String(res.compilationOutput));
          this.progressesService.executeProject(this.progressProjectID, "RUN").subscribe(() => {
            console.log("Executing...");
            this.pullerTimer = setInterval(() => {
              this.progressesService.pullStdout(this.progressProjectID).subscribe(cont => {
                this.output = this.output.concat(String(cont));
                console.log("Pulled stdout");
              });
              this.progressesService.pullStderr(this.progressProjectID).subscribe(cont => {
                this.output = this.output.concat(String(cont));
                console.log("Pulled stderr");
              });
            }, 500);
          });
        });
      });
  }

  getFile(): string {
    if (!this.files) {
      return "";
    }
    return this.files[this.files.findIndex(f3 => f3.filename === this.relativeProject.executionConfigs.find(
      ec => ec.name === "RUN"
    ).mainFile)].content;
  }

  getExecutionConfig(name: string): ExecutionConfig {
    return this.relativeProject.executionConfigs.find(ec => ec.name === name);
  }
}

