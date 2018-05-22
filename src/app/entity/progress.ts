import { ProgressUnit } from './progress-unit';
import { ProgressProject } from './progress-project';

export class Progress {
    studentID: String;
    courseID: String;
    sessionID: String;
    units: ProgressUnit[];
    projects: ProgressProject[];
}

