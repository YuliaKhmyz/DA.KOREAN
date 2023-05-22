import React from 'react';
import './coursesSection.css';
import { Button, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const BACKGROUNDS_COLORS = ['#FF5E00', '#FFAD00', '#005074', '#97B6C2'];

function CoursesSection(): JSX.Element {
  return (
    <Container style={{ height: '100vh' }}>
      <div className="courses column-content-container">
        <h2 className="courses-title">курсы</h2>
        <div className="courses">
          <div key={1} className="course" style={{ backgroundColor: BACKGROUNDS_COLORS[0] }}>
            <div>
              <h3 className="course-title">Подготовка к topik</h3>
              <p className="course-description">Мои ученики сдают topic на высший балл. Переезжают в Корею. Смотрят новые серии дорам первыми! И уверенно подпевают на K-Pop концертах ;)</p>
            </div>
            <Link to="#">
              <Button variant="outline-light" className="lesson-sign-up">
                Узнать подробнее
              </Button>
            </Link>
          </div>

          <div key={2} className="course" style={{ backgroundColor: BACKGROUNDS_COLORS[1] }}>
            <div>
              <h3 className="course-title">Самостоятельный</h3>
              <p className="course-description">Мои ученики сдают topic на высший балл. Переезжают в Корею. Смотрят новые серии дорам первыми! И уверенно подпевают на K-Pop концертах ;)</p>
            </div>
            <Link to="#">
              <Button variant="outline-light" className="lesson-sign-up">
                Узнать подробнее
              </Button>
            </Link>
          </div>

          <div key={3} className="course" style={{ backgroundColor: BACKGROUNDS_COLORS[2] }}>
            <div>
              <h3 className="course-title">Самостоятельный</h3>
              <p className="course-description">Мои ученики сдают topic на высший балл. Переезжают в Корею. Смотрят новые серии дорам первыми! И уверенно подпевают на K-Pop концертах ;)</p>
            </div>
            <Link to="#">
              <Button variant="outline-light" className="lesson-sign-up">
                Узнать подробнее
              </Button>
            </Link>
          </div>
          <div key={4} className="course" style={{ backgroundColor: BACKGROUNDS_COLORS[3] }}>
            <div>
              <h3 className="course-title">Самостоятельный</h3>
              <p className="course-description">Мои ученики сдают topic на высший балл. Переезжают в Корею. Смотрят новые серии дорам первыми! И уверенно подпевают на K-Pop концертах ;)</p>
            </div>
            <Link to="#">
              <Button variant="outline-light" className="lesson-sign-up">
                Узнать подробнее
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default CoursesSection;
