import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Components/Footer/Footer';
import Header from '../Components/Header/Header';

function Layout(): JSX.Element {
  return (
    <div className="root-container">
      <Header />
      <Outlet />
      {/* <Footer /> */}
    </div>
  );
}

export default Layout;
