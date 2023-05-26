import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Container } from 'react-bootstrap';
import { selectCourses } from './selectors';
import CoursePageItem from './CoursePageItem';
import { loadCourses } from './coursesSlice';
import { useAppDispatch } from '../../store';
import Section from '../../Components/Section/Section';

// import AddCourseForm from './AddCourseForm';
// import DeleteUpdateCourse from './DeleteUpdateCourse';

function CoursesPage(): JSX.Element {
  const courses = useSelector(selectCourses);
  const dispatch = useAppDispatch();

  // Поднятие страницы в начало
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, []);

  useEffect(() => {
    dispatch(loadCourses());
  }, [dispatch]);

  return (
    <Section>
      <Container className="courses-page-container">
        <div className="courses-page">
          <div className="courses-list">
            {courses.map((course) => (
              <div className="courses-item" key={course.id}>
                <CoursePageItem course={course} />
              </div>
            ))}
          </div>
        </div>
        {/* <img src="https://drive.google.com/file/d/13RdHkhgk4J661SnB1j9yaYPoe7kxMPL1/view" alt="1" /> */}
        {/* <AddCourseForm /> */}
        {/* <DeleteUpdateCourse /> */}
      </Container>
    </Section>
  );
}

export default CoursesPage;
