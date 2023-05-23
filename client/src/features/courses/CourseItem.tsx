import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { Course } from './types/Course';

function CourseItem({ course }: { course: Course }): JSX.Element {
  return (
    <div>
      <h3 className="course-title">{course.main_title}</h3>
      <p className="course-description">{course.main_description}</p>
      <Link to="/courses">
        <Button variant="outline-light" className="lesson-sign-up">
          Узнать подробнее
        </Button>
      </Link>
    </div>
  );
}

export default CourseItem;
