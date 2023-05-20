import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Components/Footer/Footer';
import Header from '../Components/Header/Header';
import Register from '../features/auth/Register';
import Calligraphy from '../Components/Calligraphy/Calligraphy';

function Layout(): JSX.Element {
  return (
    <div>
      <Header />

      <Outlet />
      <Footer />
    </div>
  );
}

export default Layout;
