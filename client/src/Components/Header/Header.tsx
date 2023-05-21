import React from 'react';
import NavbarComponent from '../../features/navbar/Navbar';
import './header.css';

function Header(): JSX.Element {
  const DROP_DIRECTION = 'down';
  const SHOW_SOCIALS = false;

  return (
    <header className="header">
      <NavbarComponent
        showRegBtns
        dropDirection={DROP_DIRECTION}
        showSocials={SHOW_SOCIALS}
      />
    </header>
  );
}

export default Header;
