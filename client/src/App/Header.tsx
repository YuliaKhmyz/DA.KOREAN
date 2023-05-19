import React from 'react';
import { Link } from 'react-router-dom';

function Header(): JSX.Element {
  return (
    <header>
      <a>
        <img src="" alt="logo" />
      </a>
      <a href="#">О нас</a>
      <a href="#">Языковые курсы</a> <a href="#">Калиграфия</a>
      <a href="#">Блог</a>
      <Link to="/auth/login">Войти</Link>{' '}
      <Link to="/auth/register">Регистрация</Link>{' '}
    </header>
  );
}

export default Header;
