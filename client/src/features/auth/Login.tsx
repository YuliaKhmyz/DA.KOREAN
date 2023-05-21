import React from 'react';
import { useSelector } from 'react-redux';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { login, resetLoginFormError } from './authSlice';
import { selectLoginFormError } from './selectors';
import { useAppDispatch } from '../../store';

type FormInput = {
  email: string;
  password: string;
};

function Login(): JSX.Element {
  const { register, handleSubmit } = useForm<FormInput>();
  const error = useSelector(selectLoginFormError);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<FormInput> = async (data) => {
    const dispatchResult = await dispatch(
      login({
        email: data.email,
        password: data.password,
      })
    );

    if (login.fulfilled.match(dispatchResult)) {
      navigate('/');

      if (login.rejected.match(dispatchResult)) {
        console.error(dispatchResult.payload);
      }
    }
  };

  return (
    <form className="auth-form" onSubmit={handleSubmit(onSubmit)}>
      <h2>Вход</h2>
      {error && (
        <div className="invalid-feedback mb-3" style={{ display: 'block' }}>
          {error}
        </div>
      )}
      <div className="mb-3">
        <label htmlFor="email-input" className="form-label">
          Адрес электронной почты
        </label>
        <input
          type="email"
          id="email-input"
          placeholder="Введите адрес электронной почты"
          {...register('email')}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="password-input" className="form-label">
          Пароль
        </label>
        <input
          type="password"
          id="password-input"
          placeholder="Введите пароль"
          {...register('password')}
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Войти
      </button>
    </form>
  );
}

export default Login;
