import React from 'react';
import { useSelector } from 'react-redux';
import { selectCourses } from './selectors';
import CoursePageItem from './CoursePageItem';
import AddCourseForm from './AddCourseForm';

function CoursesPage(): JSX.Element {
  const courses = useSelector(selectCourses);
  console.log(courses);

  return (
    <div>
      <div>
        {courses.map((course) => (
          <div key={course.id}>
            <CoursePageItem course={course} />
          </div>
        ))}
      </div>
      <AddCourseForm />
    </div>
  );
}

export default CoursesPage;
