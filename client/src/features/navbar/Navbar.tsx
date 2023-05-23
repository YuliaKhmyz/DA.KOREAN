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
                  <div className="user-name">어서 오세요, {user.name}님!</div>
                  <div className="user-name">
                    <Link to="/mypage">Личный кабинет</Link>
                  </div>
                  <Link onClick={handleLogout} to="/">
                    Выйти
                  </Link>
                </div>
              )}
              {!user && (
                <Nav className="me-0 auth-links">
                  <Link to="/auth/login">Вход</Link>
                  <Link to="/auth/register">Регистрация</Link>
                </Nav>
              )}
            </>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarComponent;
