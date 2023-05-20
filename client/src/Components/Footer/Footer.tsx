import React from 'react';
import NavbarComponent from '../../features/navbar/Navbar';

import './footer.css';

function Footer(): JSX.Element {
  const DROP_DIRECTION = 'up';
  return (
    <footer className="footer">
      <NavbarComponent
        showRegBtns={false}
        dropDirection={DROP_DIRECTION}
        showSocials
      />
    </footer>
  );
}

export default Footer;
