import { Component, OnInit } from '@angular/core';
import { CoursesService } from '../services/courses.service';
import { Course } from '../entity/course';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  courses: Course[];

  constructor(private coursesService: CoursesService) { }

  ngOnInit() {
    this.getCourses();
  }

  getCourses() {
    this.coursesService.getCourses().subscribe(courses => { 
      this.courses = courses;
      //Also load detailed info of all courses, like a join
      //this.courses.forEach((item, index) => {
      //    this.coursesService.getCourseDetail(item.courseID).subscribe(c => {
      //      this.courses.findIndex(i => i.courseID == item.courseID)
      //      //Fill the course element with the getted details 
      //      this.courses[index] =c;
      //    });
      //});
    });
  }
}
