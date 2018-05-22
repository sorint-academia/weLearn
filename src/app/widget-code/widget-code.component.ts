import { Component, OnInit, Input, ViewChild, ElementRef, forwardRef, Output, AfterViewInit, OnDestroy } from '@angular/core';
import * as CodeMirror from 'codemirror';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { EventEmitter } from 'events';
import { WidgetComponent } from '../widget/widget.component';

@Component({
  selector: 'app-widget-code',
  templateUrl: './widget-code.component.html',
  styleUrls: ['./widget-code.component.css']
})


export class WidgetCodeComponent extends WidgetComponent implements OnInit {  

  output = 'Output window';
  
  constructor(){
    super();
  }

  ngOnInit(){

  }

  DoSomething(value: string): void{
    console.log(value);
    this.output=value;

    //Richiesta POST verso BE
  }

}

