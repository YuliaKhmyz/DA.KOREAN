import React, { useEffect } from 'react';
import AddCourseForm from '../courses/AddCourseForm';
import DeleteUpdateCourse from '../courses/DeleteUpdateCourse';

function ChangeCourses(): JSX.Element {
  // Поднятие страницы в начало
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, []);

  return (
    <div>
      <AddCourseForm />
      <DeleteUpdateCourse />
    </div>
  );
}

export default ChangeCourses;
