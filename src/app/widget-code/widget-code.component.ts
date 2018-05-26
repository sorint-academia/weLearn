import { Component, OnInit, Input, ViewChild, ElementRef, forwardRef, Output, AfterViewInit, OnDestroy } from '@angular/core';
import * as CodeMirror from 'codemirror';
//import { NG_VALUE_ACCESSOR, MAX_LENGTH_VALIDATOR } from '@angular/forms';
import { EventEmitter } from 'events';
import { WidgetComponent } from '../widget/widget.component';
import { Project } from '../entity/project';
import { ProjectsService } from '../services/projects.service';
import { File } from '../entity/file';
import { ProgressesService } from '../services/progresses.service';
//import { SSL_OP_SSLREF2_REUSE_CERT_TYPE_BUG } from 'constants';

@Component({
  selector: 'app-widget-code',
  templateUrl: './widget-code.component.html',
  styleUrls: ['./widget-code.component.css']
})


export class WidgetCodeComponent extends WidgetComponent implements OnInit {  

  output = 'Output window';
  relativeProject: Project;
  projectDBId: String;
  files: File[];

  constructor(private projectService: ProjectsService, private progressesService: ProgressesService) {
    super();
  }

  ngOnInit() {
    this.projectService.getProject(this.widget.projectID).subscribe(pr => {
      this.relativeProject = pr;
      this.projectDBId = this.widget.projectID.replace("/api/projects/", "");
      this.files = pr.files;
      this.files.forEach(f => {
        this.progressesService.getFileOfProgressProjects("/api/progresses/myself/projects/" + this.projectDBId, f.filename)
        .subscribe(f2 => {
          this.files[this.files.findIndex(f3 => f3.filename === f.filename)].content = f2;
        });
      });
    });
  }

  DoSomething(value: string): void{
    console.log(value);
    this.output=value;

    //Richiesta POST verso BE
  }

  getFile(): String {
    return this.files[this.files.findIndex(f3 => f3.filename === this.relativeProject.executionConfigs.find(
      ec => ec.name === "RUN"
    ).mainFile)].content;
  }
}

