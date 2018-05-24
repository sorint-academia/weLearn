import { ProgressCourse } from './progress-course';
import { ProgressProject } from './progress-project';

export class Progress {
    studentID: String;
    sessionID: String;
    courses: ProgressCourse[];
    projects: ProgressProject[];
}

