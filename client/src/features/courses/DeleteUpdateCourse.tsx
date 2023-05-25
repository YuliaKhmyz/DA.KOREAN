import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Container } from 'react-bootstrap';
import { useAppDispatch } from '../../store';
import { loadCourses } from './coursesSlice';
import { selectCourses } from './selectors';
import UpdateCourseItem from './UpdateCourseItem';
import Section from '../../Components/Section/Section';

function DeleteUpdateCourse(): JSX.Element {
  const dispatch = useAppDispatch();
  const courses = useSelector(selectCourses);

  useEffect(() => {
    dispatch(loadCourses());
  }, [dispatch]);

  return (
    <Section>
      <Container className="courses-page-container">
        <div className="courses-page">
          <div className="courses-list">
            {courses.map((course) => (
              <div className="courses-item change" key={course.id}>
                <UpdateCourseItem course={course} />
              </div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}

export default DeleteUpdateCourse;
