import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable()
export class LoggerService {

  constructor() { }

  log(obj) {
    if (environment.logger) {
      console.log(obj);
    }
  }
}
