import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { Button, Container } from 'react-bootstrap';
import { useAppDispatch } from '../../store';
import { selectUser } from '../auth/selectors';
import MyCalender from '../../Components/Calendar/Calendar';
import { selectMyCalligraphies } from './selectors';
import MyCalligraphy from './types/Calligraphy';
import { getMyCalligraphies } from './userPageSlice';
import UploadFile from './UploadFile';
import Section from '../../Components/Section/Section';
import './userPage.css';

function MyPage(): JSX.Element {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const user = useSelector(selectUser);
  const mycalligraphies = useSelector(selectMyCalligraphies);
  console.log(mycalligraphies);

  useEffect(() => {
    if (user) {
      dispatch(getMyCalligraphies());
    }

    if (!user) {
      navigate('/');
    }
  }, [dispatch, mycalligraphies, user, navigate]);

  return (
    <Section>
      <Container className="user-page-container user-page">
        <h4 className="greetings">
          <span className="username">{user?.name}!</span> Добро пожаловать в личный кабинет! 오늘도 좋은 하루~
        </h4>
        <h5 className="page-subtitle">Мой календарь</h5>
        <MyCalender />

        <h5 className="page-subtitle">Мои курсы</h5>
        <div>Здесь будут ваши курсы</div>
        <br />
        <h5 className="page-subtitle">Мои прописи</h5>
        {!mycalligraphies && <div>Здесь будут ваши прописи</div>}
        {mycalligraphies && (
          <div>
            {mycalligraphies.map((calligraphy) => (
              <div className="bought-course" key={calligraphy.id}>
                <div className="calligraphy-subtitle">{calligraphy.title}</div>
                <Link to={calligraphy.link}>
                  <Button variant="outline-secondary" className="download">
                    Загрузить
                  </Button>
                </Link>
              </div>
            ))}
                    <UploadFile />
          </div>
        )}
      </Container>
    </Section>
  );
}

export default MyPage;
