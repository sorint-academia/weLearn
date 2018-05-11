import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Course } from '../entity/course';
import { Unit } from '../entity/unit';
import { Widget } from '../entity/widget';
import { of } from 'rxjs/observable/of';
import { LoggerService } from './logger.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable()
export class CoursesService {

  constructor(private http: HttpClient, private loggerService: LoggerService) { }

  getCourses(): Observable<Course[]> {
    this.loggerService.log("requesting the list of courses");
    return this.http.get<Course[]>(environment.backendBaseUrl + "/api/courses");
  }
  getCourseDetail(courseID: String): Observable<Course> {
    this.loggerService.log("requesting the course detail: " + courseID);
    return this.http.get<Course>(environment.backendBaseUrl + courseID);
  }
  getCourseUnits(courseID: String): Observable<Unit[]> {
    this.loggerService.log("requesting the course units: " + courseID);
    return this.http.get<Unit[]>(environment.backendBaseUrl + courseID + "/units");
  }
  getUnit(unitID: String): Observable<Unit> {
    this.loggerService.log("requesting the unit: " + unitID);
    return this.http.get<Unit>(environment.backendBaseUrl + unitID);
  }
  getUnitWidgets(unitID: String): Observable<Widget[]> {
    this.loggerService.log("requesting the unit widgets: " + unitID);
    return this.http.get<Widget[]>(environment.backendBaseUrl + unitID + "/widgets");
  }
}
