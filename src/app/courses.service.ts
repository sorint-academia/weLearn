import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Course } from './course';
import { of } from 'rxjs/observable/of';
import { COURSES } from './mock-courses';

@Injectable()
export class CoursesService {

  constructor() { }

  getCourses() : Observable<Course[]> {
    return of(COURSES);
  }
}
