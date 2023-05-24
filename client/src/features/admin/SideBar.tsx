import React, { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import './sideBar.css';

function SideBar(): JSX.Element {
  const [activeBtn, setActiveBtn] = useState('courses');

  return (
    <div className="sidebar">
      <ul
        style={{ width: '254px' }}
        className="nav nav-pills flex-column mb-auto"
      >
        <li className="nav-item">
          <Link
            to="/admin/changecourses"
            className={activeBtn === 'courses' ? 'nav-link active' : 'nav-link'}
            aria-current="page"
            onClick={() => setActiveBtn('courses')}
          >
            Управление курсами
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/admin/changecalligraphy"
            className={activeBtn === 'calligs' ? 'nav-link active' : 'nav-link'}
            onClick={() => setActiveBtn('calligs')}
          >
            Редактирование каллиграфий
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/admin/updateblog"
            className={activeBtn === 'blog' ? 'nav-link active' : 'nav-link'}
            onClick={() => setActiveBtn('blog')}
          >
            Редактирование блога
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/admin/paymentinfo"
            className={activeBtn === 'payment' ? 'nav-link active' : 'nav-link'}
            onClick={() => setActiveBtn('payment')}
          >
            Информация об оплатах
          </Link>
        </li>
      </ul>
      <Outlet />
    </div>
  );
}

export default SideBar;
