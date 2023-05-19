import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Components/Footer/Footer';
import Header from '../Components/Header/Header';

function Layout(): JSX.Element {
  return (
    <div>
      <Header />
      <div className="main-content" style={{ height: '100px' }}>
        <h1>Какой-то контент</h1>
      </div>
      <Outlet />
      <Footer />
    </div>
  );
}

export default Layout;
