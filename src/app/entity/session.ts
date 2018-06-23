import { Course } from "./course";

export class Session {
    sessionID: string;
    courseID: string;
    teacherID: string;
    startDate: Date;
    endDate: Date;
    studentsID: string[];
    followAsStudent: Boolean;
    followAsTeacher: Boolean;
    course: Course;
    progressPercentual: Number;
}
