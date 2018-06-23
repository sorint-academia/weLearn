import { ExecutionConfig } from './execution-config';
import { File } from './file';

export class Project {
    projectID: string;
    name: string;
    previousProjectID: string;
    version: Number;
    executionConfigs: ExecutionConfig[];
    files: File[];
}
