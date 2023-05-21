import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';
import './firstSection.css';

function FirstSection(): JSX.Element {
  return (
    <Container>
      <div className="first-section_up">
        <div className="first-section_left">
          <h1 className="title">Корейский язык в авторском курсе от Дарьи</h1>
          <p className="description">Больше __ лет живу в Корее. Сдала topic на 97/100. Создаю уникальные прописи для изучения тонкостей и особенностей корейской каллиграфии, веду личный блог о жизни в Корее.</p>
          <Link to="#">
            <Button variant="warning" className="lesson-sign-up">
              Записаться на урок
            </Button>
          </Link>
          <Link to="#">
            <Button variant="outline-secondary" className="more-info">
              Подробнее
            </Button>
          </Link>
        </div>

        <div className="first-section_right">
          <img src="./images/owner_photo.png" alt="owner" />
        </div>
      </div>

      <div className="first-section_down">
        <ul className="list">
          <div className="li-wrapper">
            <img src="./images/point_orange.png" alt="orange point" />
            <li className="benefit">Разговорная практика с преподавателем</li>
          </div>
          <div className="li-wrapper">
            <img src="./images/point_yellow.png" alt="yellow point" />
            <li className="benefit">Подготовка к экзаменам на высший бал</li>
          </div>
          <div className="li-wrapper">
            <img src="./images/point_blue.png" alt="blue point" />
            <li className="benefit">Прописи для изучения тонкостей письма</li>
          </div>
        </ul>
      </div>
    </Container>
  );
}

export default FirstSection;
