import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { Course } from './types/Course';
import './coursePageItem.css';
import { separateNumbers } from '../../utils/utils';

type CoursePageItemProps = {
  course: Course;
};

function CoursePageItem({ course }: CoursePageItemProps): JSX.Element {
  return (
    <>
      <h2 className="main-title">{course.main_title}</h2>

      <div className="columns">
        <div className="left-column column">
          <h3 className="start-title">{course.start_title}</h3>
          <div className="start-description">{course.start_description}</div>
        </div>

        <div className="middle-column column">
          <h3 className="condition-title">{course.condition_title}</h3>
          <div className="condition-description">
            {course.condition_description}
          </div>
        </div>

        <div className="right-column column">
          <h3 className="price-title">{course.price_title}</h3>
          <div className="price">{separateNumbers(course.price)} Р</div>
          <Link to="#">
            <Button variant="outline-secondary" className="course-buy">
              Купить
            </Button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default CoursePageItem;
