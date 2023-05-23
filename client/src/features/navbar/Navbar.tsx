import React, { useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './Navbar.css';
import { Link, useNavigate, NavLink } from 'react-router-dom';
import { DropDirection } from 'react-bootstrap/esm/DropdownContext';
import { useSelector } from 'react-redux';
import { selectAuthChecked, selectUser } from '../auth/selectors';
import { getUser, logout } from '../auth/authSlice';
import { useAppDispatch } from '../../store';
import logo from './logo.svg';

type NavbarComponentProps = {
  showLogo: boolean;
  showRegBtns: boolean;
  dropDirection: DropDirection;
};

function NavbarComponent({ showLogo, showRegBtns, dropDirection }: NavbarComponentProps): JSX.Element {
  const user = useSelector(selectUser);
  const authChecked = useSelector(selectAuthChecked);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleLogout = React.useCallback(
    async (event: React.MouseEvent) => {
      event.preventDefault();

      const dispatchResult = await dispatch(logout());
      if (logout.fulfilled.match(dispatchResult)) {
        navigate('/');
      }
    },
    [dispatch, navigate],
  );

  useEffect(() => {
    dispatch(getUser());
  }, [dispatch]);

  return (
    <Navbar>
      <Container>
        {showLogo && (
          <Link to="/" className="logo-text">
            <img src={logo} alt="logo_image" />
          </Link>
        )}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link to="#about" className="page-link">
              {' '}
              О нас{' '}
            </Link>
            <NavDropdown title="Курсы" drop={dropDirection} id="basic-nav-dropdown" className="page-link">
              <NavDropdown.Item href="#action/3.1">Курс 1</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Курс 2</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Курс 3</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Каллиграфия (если нужно)</NavDropdown.Item>
            </NavDropdown>
            <Link to="/calligraphy" className="page-link">
              Каллиграфия
            </Link>
            <Link to="#blog" className="page-link">
              Блог
            </Link>
          </Nav>
          {showRegBtns && (
            <>
              {user && (
                <div className=" d-flex">
                  <div className="user-name">
                    <Link to="/mypage">
                      <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-person" viewBox="0 0 16 16">
                        <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z" />
                      </svg>
                    </Link>
                  </div>
                  <div className="auth-links">
                    <Link className="auth-links" onClick={handleLogout} to="/">
                      Выйти
                    </Link>
                  </div>
                </div>
              )}
              {!user && (
                <div className="auth-links">
                  <Link to="/auth/login">Вход</Link>
                  <Link to="/auth/register">Регистрация</Link>
                </div>
              )}
            </>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarComponent;
