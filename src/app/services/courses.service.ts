import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Course } from '../entity/course';
import { Unit } from '../entity/unit';
import { Widget } from '../entity/widget';
import { LoggerService } from './logger.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Project } from '../entity/project';

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
  getProjects(): Observable<Project[]> {
    this.loggerService.log("Requesting projects");
    return this.http.get<Project[]>(environment.backendBaseUrl + "/projects");
  }
  getProject(projectID: String): Observable<Project> {
    this.loggerService.log("Requesting project with id: " + projectID);
    return this.http.get<Project>(environment.backendBaseUrl + "/projects/" + projectID);
  }
}
