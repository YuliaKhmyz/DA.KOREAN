import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { selectCourses } from './selectors';
import CoursePageItem from './CoursePageItem';
import AddCourseForm from './AddCourseForm';
import { loadCourses } from './coursesSlice';
import { useAppDispatch } from '../../store';
import DeleteUpdateCourse from './DeleteUpdateCourse';

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
      <img
        src="https://drive.google.com/file/d/13RdHkhgk4J661SnB1j9yaYPoe7kxMPL1/view"
        alt="1"
      />
      <AddCourseForm />
      <DeleteUpdateCourse />
    </div>
  );
}

export default CoursesPage;
