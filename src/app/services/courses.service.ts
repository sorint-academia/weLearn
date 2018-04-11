import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Course } from '../entity/course';
import { of } from 'rxjs/observable/of';
import { COURSES } from '../mock-data/mock-courses';

@Injectable()
export class CoursesService {

  constructor() { }

  getCourses() : Observable<Course[]> {
    return of(COURSES);
  }
}
