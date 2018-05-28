import { Injectable } from '@angular/core';
import { Session } from '../entity/session';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LoggerService } from './logger.service';
import { environment } from '../../environments/environment';

@Injectable()
export class SessionsService {

  constructor(private http: HttpClient, private loggerService: LoggerService) { }

  getSessions(): Observable<Session[]> {
    this.loggerService.log("requesting the list of sessions");
    return this.http.get<Session[]>(environment.backendBaseUrl + "/api/sessions");
  }
  getSessionsAsStudent(): Observable<Session[]> {
    this.loggerService.log("requesting the list of sessions as student");
    return this.http.get<Session[]>(environment.backendBaseUrl + "/api/sessions/asStudent");
  }
  getSessionsAsTeacher(): Observable<Session[]> {
    this.loggerService.log("requesting the list of sessions as teacher");
    return this.http.get<Session[]>(environment.backendBaseUrl + "/api/sessions/asTeacher");
  }
  getSession(id: String): Observable<Session[]> {
    this.loggerService.log("requesting the session: " + id);
    return this.http.get<Session[]>(environment.backendBaseUrl + id);
  }
  getSessionStudentsOk(id: String): Observable<String[]> {
    this.loggerService.log("requesting the students of the session: " + id);
    return this.http.get<String[]>(environment.backendBaseUrl + id + "/students");
  }

}
