import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import * as Codemirror from 'codemirror';
import { WidgetComponent } from '../widget/widget.component';

@Component({
  selector: 'app-widget-code',
  templateUrl: './widget-code.component.html',
  styleUrls: ['./widget-code.component.css']
})
export class WidgetCodeComponent extends WidgetComponent implements OnInit {
  @ViewChild('code') code: ElementRef;

  constructor() { 
    super();
  }

  ngOnInit() {
  }

  ngAfterViewInit(){
    Codemirror.fromTextArea(this.code.nativeElement, {
      lineNumbers: true,
      mode: "htmlmixed",
      value: 'prova'    
    });
  }
}
