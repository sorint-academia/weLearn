import { Unit } from './unit';

export class Course {
    courseID: string;
    title: string;
    description: string;
    author: string;
    units: Unit[];
}
