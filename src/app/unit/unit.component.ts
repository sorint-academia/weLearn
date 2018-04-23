import { Component, OnInit } from '@angular/core';
import { Widget } from '../entity/widget';
import { CoursesService } from '../services/courses.service';

@Component({
  selector: 'app-unit',
  templateUrl: './unit.component.html',
  styleUrls: ['./unit.component.css']
})
export class UnitComponent implements OnInit {

  widgets: Widget[];

  constructor(private coursesService: CoursesService) { }

  ngOnInit() {
  }

}
