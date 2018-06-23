import { Injectable } from '@angular/core';
import { LoggerService } from './logger.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Progress } from '../entity/progress';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { ProgressProject } from '../entity/progress-project';
import { BuildResult } from '../entity/build-result';
import { ExecutionStatus } from '../entity/execution-status';
import { Signal } from '../entity/signal';

@Injectable()
export class ProgressesService {

  constructor(private http: HttpClient, private loggerService: LoggerService) { }

  getProgresses(): Observable<Progress[]> {
    this.loggerService.log("requesting the list of progresses");
    return this.http.get<Progress[]>(environment.backendBaseUrl + "/api/progresses");
  }
  getProgress(progressID: string): Observable<Progress> {
    this.loggerService.log("requesting the progress");
    return this.http.get<Progress>(environment.backendBaseUrl + progressID);
  }
  getProgressProjects(progressID: string): Observable<ProgressProject[]> {
    this.loggerService.log("requesting the projects of progress");
    return this.http.get<ProgressProject[]>(environment.backendBaseUrl + progressID + "/projects");
  }
  getFileOfProgressProjects(progressProjectID: string, filename: string): Observable<string> {
    this.loggerService.log("requesting the file of project of progress");
    const options = {responseType: 'text' as 'json'};
    return this.http.get<string>(environment.backendBaseUrl + progressProjectID + "/files/" + filename, options);
  }
  putFileOfProgressProjects(progressProjectID: string, filename: string, content: string): Observable<null> {
    this.loggerService.log("putting the file of project of progress");
    const options = {responseType: 'text' as 'json'};
    return this.http.put<null>(environment.backendBaseUrl + progressProjectID + "/files/" + filename, content, options);
  }
  buildProject(progressProjectID: string, executionConfigName: string): Observable<BuildResult> {
    this.loggerService.log("building the project");
    return this.http.post<BuildResult>(environment.backendBaseUrl + progressProjectID + "/build/" + executionConfigName, null);
  }
  executeProject(progressProjectID: string, executionConfigName: string): Observable<null> {
    this.loggerService.log("building the project");
    return this.http.post<null>(environment.backendBaseUrl + progressProjectID + "/exec/" + executionConfigName, null);
  }
  pullStdout(progressProjectID: string): Observable<Uint8Array> {
    this.loggerService.log("requesting the stdout of the process of project of progress");
    const options = {responseType: 'text' as 'json'};
    return this.http.get<Uint8Array>(environment.backendBaseUrl + progressProjectID + "/stdout", options);
  }
  pullStderr(progressProjectID: string): Observable<Uint8Array> {
    this.loggerService.log("requesting the stderr of the process of project of progress");
    const options = {responseType: 'text' as 'json'};
    return this.http.get<Uint8Array>(environment.backendBaseUrl + progressProjectID + "/stderr", options);
  }
  pushStdin(progressProjectID: string, content: Uint8Array): Observable<Uint8Array> {
    this.loggerService.log("pushing bytes to the stdin of the process of project of progress");
    return this.http.put<Uint8Array>(environment.backendBaseUrl + progressProjectID + "/stdin", content);
  }
  getProcessStatus(progressProjectID: string): Observable<ExecutionStatus> {
    this.loggerService.log("requesting the status of the process of project of progress");
    return this.http.get<ExecutionStatus>(environment.backendBaseUrl + progressProjectID + "/status");
  }
  sendSignalToProcess(progressProjectID: string, signalInfo: Signal): Observable<null> {
    this.loggerService.log("sending the signal to process");
    return this.http.post<null>(environment.backendBaseUrl + progressProjectID + "/status/", signalInfo);
  }
}
