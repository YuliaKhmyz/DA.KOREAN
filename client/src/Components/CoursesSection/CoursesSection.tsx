import React, { useEffect } from 'react';
import './coursesSection.css';
import { Container } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { useAppDispatch } from '../../store';
import { selectCourses } from '../../features/courses/selectors';
import { loadCourses } from '../../features/courses/coursesSlice';
import CourseItem from '../../features/courses/CourseItem';

const BACKGROUNDS_COLORS = ['#FF5E00', '#FFAD00', '#005074', '#97B6C2'];

function CoursesSection(): JSX.Element {
  const dispatch = useAppDispatch();
  const courses = useSelector(selectCourses);
  const cutCourses = courses.slice(0, 4);

  useEffect(() => {
    dispatch(loadCourses());
  }, [dispatch]);
  return (
    <Container style={{ height: '100vh' }}>
      <div className="courses column-content-container">
        <h2 className="courses-title">курсы</h2>
        <div className="courses">
          {cutCourses.map((course) => (
            <div key={course.id} className="course" style={{ backgroundColor: BACKGROUNDS_COLORS[course.id] }}>
              <CourseItem course={course} />
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
}

export default CoursesSection;
