import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../store';
import { selectUser } from '../auth/selectors';
import MyCalender from '../../Components/Calendar/Calendar';
import { selectMyCalligraphies } from './selectors';
import MyCalligraphy from './types/Calligraphy';
import { getMyCalligraphies } from './userPageSlice';

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
    <div>
      <h4>
        {user?.name}! Добро пожаловать в личный кабинет! 오늘도 좋은 하루~
      </h4>
      <h5>Мой календарь</h5>
      <MyCalender />

      <h5>Мои курсы</h5>
      <div>Здесь будут ваши курсы</div>
      <br />
      <h5>Мои прописи</h5>
      {!mycalligraphies && <div>Здесь будут ваши прописи</div>}
      {mycalligraphies && (
        <div>
          {mycalligraphies.map((calligraphy) => (
            <div key={calligraphy.id}>
              <h4>{calligraphy.title}</h4>
              <button type="button">
                <a href={calligraphy.link}>Загрузить</a>
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default MyPage;
