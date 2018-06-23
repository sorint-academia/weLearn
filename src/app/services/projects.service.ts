import { Injectable } from '@angular/core';
import { LoggerService } from './logger.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Progress } from '../entity/progress';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Project } from '../entity/project';

@Injectable()
export class ProjectsService {

  constructor(private http: HttpClient, private loggerService: LoggerService) { }

  getProjects(): Observable<Project[]> {
    this.loggerService.log("requesting the list of projects");
    return this.http.get<Project[]>(environment.backendBaseUrl + "/api/projects");
  }

  getProject(projectID: string): Observable<Project> {
    this.loggerService.log("requesting the project");
    return this.http.get<Project>(environment.backendBaseUrl + projectID);
  }
}
