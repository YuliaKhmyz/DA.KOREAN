import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch } from '../../store';
import { loadCourses } from './coursesSlice';
import { selectCourses } from './selectors';
import UpdateCourseItem from './UpdateCourseItem';

function DeleteUpdateCourse(): JSX.Element {
  const dispatch = useAppDispatch();
  const courses = useSelector(selectCourses);

  useEffect(() => {
    dispatch(loadCourses());
  }, [dispatch]);

  return (
    <div>
      <div>
        {courses.map((course) => (
          <div key={course.id}>
            <UpdateCourseItem course={course} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default DeleteUpdateCourse;
