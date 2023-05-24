import React from 'react';
import NavbarComponent from '../../features/navbar/Navbar';

function Header(): JSX.Element {
  const DROP_DIRECTION = 'down';

  return (
    <header className="header">
      <NavbarComponent showLogo showRegBtns dropDirection={DROP_DIRECTION} />
    </header>
  );
}

export default Header;
