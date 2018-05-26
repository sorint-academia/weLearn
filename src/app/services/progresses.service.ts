import { Injectable } from '@angular/core';
import { LoggerService } from './logger.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Progress } from '../entity/progress';
import { Observable } from 'rxjs/Observable';
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
  getProgress(progressID: String): Observable<Progress> {
    this.loggerService.log("requesting the progress");
    return this.http.get<Progress>(environment.backendBaseUrl + progressID);
  }
  getProgressProjects(progressID: String): Observable<ProgressProject[]> {
    this.loggerService.log("requesting the projects of progress");
    return this.http.get<ProgressProject[]>(environment.backendBaseUrl + progressID + "/projects");
  }
  getFileOfProgressProjects(progressProjectID: String, filename: String): Observable<String> {
    this.loggerService.log("requesting the file of project of progress");
    const options = {responseType: 'text' as 'json'};
    return this.http.get<String>(environment.backendBaseUrl + progressProjectID + "/files/" + filename, options);
  }
  buildProject(progressProjectID: String, executionConfigName: String): Observable<BuildResult> {
    this.loggerService.log("building the project");
    return this.http.post<BuildResult>(environment.backendBaseUrl + progressProjectID + "/build/" + executionConfigName, null);
  }
  executeProject(progressProjectID: String, executionConfigName: String): Observable<null> {
    this.loggerService.log("building the project");
    return this.http.post<null>(environment.backendBaseUrl + progressProjectID + "/exec/" + executionConfigName, null);
  }
  pullStdout(progressProjectID: String): Observable<Uint8Array> {
    this.loggerService.log("requesting the stdout of the process of project of progress");
    return this.http.get<Uint8Array>(environment.backendBaseUrl + progressProjectID + "/stdout");
  }
  pullStderr(progressProjectID: String): Observable<Uint8Array> {
    this.loggerService.log("requesting the stderr of the process of project of progress");
    return this.http.get<Uint8Array>(environment.backendBaseUrl + progressProjectID + "/stderr");
  }
  pushStdin(progressProjectID: String, content: Uint8Array): Observable<Uint8Array> {
    this.loggerService.log("pushing bytes to the stdin of the process of project of progress");
    return this.http.put<Uint8Array>(environment.backendBaseUrl + progressProjectID + "/stdin", content);
  }
  getProcessStatus(progressProjectID: String): Observable<ExecutionStatus> {
    this.loggerService.log("requesting the status of the process of project of progress");
    return this.http.get<ExecutionStatus>(environment.backendBaseUrl + progressProjectID + "/status");
  }
  sendSignalToProcess(progressProjectID: String, signalInfo: Signal): Observable<null> {
    this.loggerService.log("sending the signal to process");
    return this.http.post<null>(environment.backendBaseUrl + progressProjectID + "/status/", signalInfo);
  }
}
