import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Components/Footer/Footer';
import Header from '../Components/Header/Header';
import './Layout.css';
import UpButton from '../Components/UpButton/UpButton';

function Layout(): JSX.Element {
  // Обработчик нажатия на кнопку "Наверх". Плавное поднятие на верх страницы
  const handleUpButtonClick = (evt: React.MouseEvent<HTMLAnchorElement>): void => {
    evt.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className="root-container">
      <Header />
      <Outlet />
      <Footer />
      <UpButton handleUpButtonClick={handleUpButtonClick} />
    </div>
  );
}

export default Layout;
