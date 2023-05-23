import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch } from '../../store';
import { loadCourses } from './coursesSlice';
import { selectCourses } from './selectors';
import CourseItem from './CourseItem';

function CoursesList(): JSX.Element {
  const dispatch = useAppDispatch();
  const courses = useSelector(selectCourses);
  useEffect(() => {
    dispatch(loadCourses());
  }, [dispatch]);
  return (
    <div>
      <h2>курсы</h2>
      <div>
        {courses.map((course) => (
          <div key={course.id}>
            <CourseItem course={course} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default CoursesList;
