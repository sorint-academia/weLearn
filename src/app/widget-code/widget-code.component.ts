import { Component, OnInit } from '@angular/core';
import { WidgetComponent } from '../widget/widget.component';

@Component({
  selector: 'app-widget-code',
  templateUrl: './widget-code.component.html',
  styleUrls: ['./widget-code.component.css']
})
export class WidgetCodeComponent extends WidgetComponent implements OnInit {

  constructor() { 
    super();
  }

  ngOnInit() {
  }

}
