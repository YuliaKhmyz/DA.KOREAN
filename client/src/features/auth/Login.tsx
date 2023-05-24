/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { useSelector } from 'react-redux';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { Button, Container } from 'react-bootstrap';
import { login } from './authSlice';
import { selectLoginFormError, selectUser } from './selectors';
import { useAppDispatch } from '../../store';
import './login.css';
import Section from '../../Components/Section/Section';

type FormInput = {
  email: string;
  password: string;
};

function Login(): JSX.Element {
  const { register, handleSubmit } = useForm<FormInput>();
  const error = useSelector(selectLoginFormError);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const user = useSelector(selectUser);

  const onSubmit: SubmitHandler<FormInput> = async (data) => {
    const dispatchResult = await dispatch(
      login({
        email: data.email,
        password: data.password,
      }),
    );

    if (login.fulfilled.match(dispatchResult)) {
      navigate('/');

      if (login.rejected.match(dispatchResult)) {
        console.error(dispatchResult.payload);
      }
    }
  };
  console.log(user);

  return (
    <Section>
      <Container className="login-container">
        <form className="login auth-form" onSubmit={handleSubmit(onSubmit)}>
          <h2 className="login-title">Вход</h2>
          {error && (
            <div className="invalid-feedback mb-3" style={{ display: 'block' }}>
              {error}
            </div>
          )}

          <label htmlFor="email-input" className="form-label">
            Адрес электронной почты
            <input
              type="email"
              id="email-input"
              className="email-input"
              placeholder="Введите адрес электронной почты"
              {...register('email')}
            />
          </label>
          <label htmlFor="password-input" className="form-label">
            Пароль
            <input
              type="password"
              id="password-input"
              className="password-input"
              placeholder="Введите пароль"
              {...register('password')}
            />
          </label>
          <Button
            type="submit"
            variant="outline-secondary"
            className="login-btn"
          >
            Войти
          </Button>
        </form>
      </Container>
    </Section>
  );
}

export default Login;
