import { Course } from "./course";

export class Session {
    sessionID: String;
    courseID: String;
    teacherID: String;
    startDate: Date;
    endDate: Date;
    studentsID: String[];
    followAsStudent: Boolean;
    followAsTeacher: Boolean;
    course: Course;
    progressPercentual: Number;
}
