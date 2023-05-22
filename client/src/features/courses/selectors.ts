import { RootState } from '../../store';
import { Course } from './types/Course';

export const selectCourses = (state: RootState): Course[] =>
  state.courses.courses;
