import { ProgressCourse } from './progress-course';
import { ProgressProject } from './progress-project';

export class Progress {
    studentID: string;
    sessionID: string;
    courses: ProgressCourse[];
    projects: ProgressProject[];
}

