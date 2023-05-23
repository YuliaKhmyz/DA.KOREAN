import { Course } from './Course';

type CourseData = Omit<Course, 'id'>;

export default CourseData;
