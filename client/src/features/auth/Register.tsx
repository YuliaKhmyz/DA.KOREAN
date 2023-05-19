/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { registerUser, resetRegisterFormError } from './authSlice';
import { useAppDispatch } from '../../store';

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

  const onSubmit: SubmitHandler<FormInput> = async (data) => {
    console.log(data);

    const dispatchResult = await dispatch(
      registerUser({
        name: data.name,
        email: data.email,
        password: data.password,
        password2: data.password2,
      })
    );
    if (registerUser.fulfilled.match(dispatchResult)) {
      navigate('/');
    }
  };

  return (
    // eslint-disable-next-line @typescript-eslint/no-misused-promises
    <form className="auth-form" onSubmit={handleSubmit(onSubmit)}>
      <h2>Регистрация</h2>
      <div className="mb-3">
        <label htmlFor="name-input" className="form-label">
          Имя
          <input
            placeholder="Введите имя"
            type="text"
            id="name-input"
            // eslint-disable-next-line react/jsx-props-no-spreading
            {...register('name', { required: true })}
          />
        </label>
      </div>
      <div className="mb-3">
        <label htmlFor="email-input" className="form-label">
          Адрес электронной почты
          <input
            type="email"
            id="email-input"
            placeholder="Введите адрес электронной почты"
            {...register('email', { required: true })}
          />
        </label>
      </div>
      <div className="mb-3">
        <label htmlFor="password-input" className="form-label">
          Пароль
          <input
            type="password"
            id="password-input"
            placeholder="Введите пароль"
            {...register('password', { required: true })}
          />
        </label>
      </div>
      <div className="mb-3">
        <label htmlFor="password-repeat-input" className="form-label">
          Повторите пароль
          <input
            type="password"
            id="password-repeat-input"
            placeholder="Введите пароль повторно"
            {...register('password2', { required: true })}
          />
        </label>
      </div>
      <button type="submit" className="btn btn-primary">
        Зарегистрироваться
      </button>
    </form>
  );
}

export default Register;
