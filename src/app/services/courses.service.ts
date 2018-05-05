import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Course } from '../entity/course';
import { of } from 'rxjs/observable/of';
import { COURSES } from '../mock-data/mock-courses';
import { LoggerService } from './logger.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable()
export class CoursesService {

  constructor(private http: HttpClient, private loggerService: LoggerService) { }

  getCourses(): Observable<Course[]> {
    this.loggerService.log("requesting the list of courses");
    return this.http.get<Course[]>(environment.backendBaseUrl+"/api/courses");
  }
}
