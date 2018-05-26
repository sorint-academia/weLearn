import { ExecutionConfig } from './execution-config';
import { File } from './file';

export class Project {
    projectID: String;
    name: String;
    previousProjectID: String;
    version: Number;
    executionConfigs: ExecutionConfig[];
    files: File[];
}
