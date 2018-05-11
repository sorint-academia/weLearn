import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Unit } from '../entity/unit';
import { CoursesService } from '../services/courses.service';

@Component({
  selector: 'app-unit',
  templateUrl: './unit.component.html',
  styleUrls: ['./unit.component.css']
})
export class UnitComponent implements OnInit {

  unit: Unit;

  constructor(private route: ActivatedRoute, private location: Location, private coursesService: CoursesService) {

  }

  ngOnInit() {
    const courseID = this.route.snapshot.paramMap.get("courseID");
    const unitID = this.route.snapshot.paramMap.get("unitID");
    const fullPath = "/api/courses/" + courseID + "/units/" + unitID;
    console.log(fullPath);
    this.coursesService.getUnit(fullPath).subscribe(unit => {
      this.unit = unit;
    }
  }

}
