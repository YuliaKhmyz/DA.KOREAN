import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { selectCourses } from './selectors';
import CoursePageItem from './CoursePageItem';
import AddCourseForm from './AddCourseForm';
import { loadCourses } from './coursesSlice';
import { useAppDispatch } from '../../store';

function CoursesPage(): JSX.Element {
  const courses = useSelector(selectCourses);
  const dispatch = useAppDispatch();
  console.log(courses);
  useEffect(() => {
    dispatch(loadCourses());
  }, [dispatch]);

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
