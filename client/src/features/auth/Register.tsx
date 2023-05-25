/* eslint-disable react/jsx-props-no-spreading */
import React, { useCallback, useEffect } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Button, Container } from 'react-bootstrap';
import { registerUser } from './authSlice';
import { selectRegisterFormError } from './selectors';
import { useAppDispatch } from '../../store';
import Section from '../../Components/Section/Section';
import './register.css';

type FormInput = {
  name: string;
  email: string;
  password: string;
  password2: string;
};

function Register(): JSX.Element {
  const { register, handleSubmit } = useForm<FormInput>();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const error = useSelector(selectRegisterFormError);

  // Поднятие страницы в начало
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, []);

  const onSubmit: SubmitHandler<FormInput> = React.useCallback(
    async (data) => {
      const dispatchResult = await dispatch(
        registerUser({
          name: data.name,
          email: data.email,
          password: data.password,
          password2: data.password2,
        }),
      );
      if (registerUser.fulfilled.match(dispatchResult)) {
        navigate('/');
      }
    },
    [dispatch, navigate],
  );

  return (
    // eslint-disable-next-line @typescript-eslint/no-misused-promises
    <Section>
      <Container className="registration-container">
        <form className="registration auth-form" onSubmit={handleSubmit(onSubmit)}>
          <h2 className="registration-title">Регистрация</h2>
          {error && (
            <div className="invalid-feedback mb-3" style={{ display: 'block' }}>
              {error}
            </div>
          )}
          <label htmlFor="name-input" className="form-label">
            Имя
            <input
              placeholder="Введите имя"
              type="text"
              id="name-input"
              // eslint-disable-next-line react/jsx-props-no-spreading
              {...register('name')}
            />
          </label>
          <label htmlFor="email-input" className="form-label">
            Адрес электронной почты
            <input type="email" id="email-input" placeholder="Введите адрес электронной почты" {...register('email')} />
          </label>
          <label htmlFor="password-input" className="form-label">
            Пароль
            <input type="password" id="password-input" placeholder="Введите пароль" {...register('password')} />
          </label>
          <label htmlFor="password-repeat-input" className="form-label">
            Повторите пароль
            <input type="password" id="password-repeat-input" placeholder="Повторите пароль" {...register('password2')} />
          </label>
          <Button type="submit" variant="outline-secondary" className="registration-btn">
            Зарегистрироваться
          </Button>
        </form>
      </Container>
    </Section>
  );
}

export default Register;
