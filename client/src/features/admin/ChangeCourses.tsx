import React from 'react';
import AddCourseForm from '../courses/AddCourseForm';
import DeleteUpdateCourse from '../courses/DeleteUpdateCourse';

function ChangeCourses(): JSX.Element {
  return (
    <div>
      <AddCourseForm />
      <DeleteUpdateCourse />
    </div>
  );
}

export default ChangeCourses;
