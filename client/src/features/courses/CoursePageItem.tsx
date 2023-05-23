import React from 'react';
import { Course } from './types/Course';

function CoursePageItem({ course }: { course: Course }): JSX.Element {
  return (
    <div>
      <h2>{course.main_title}</h2>
      <h3>{course.start_title}</h3>
      <div>{course.start_description}</div>
      <h3>{course.condition_title}</h3>
      <div>{course.condition_description}</div>
      <h3>{course.price_title}</h3>
      <div>{course.price}</div>
    </div>
  );
}

export default CoursePageItem;
