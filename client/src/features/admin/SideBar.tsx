import React from 'react';
import { Link, Outlet } from 'react-router-dom';

function SideBar(): JSX.Element {
  return (
    <div>
      <ul
        style={{ width: '254px' }}
        className="nav nav-pills flex-column mb-auto"
      >
        <li className="nav-item">
          <Link
            to="/admin/changecourses"
            className="nav-link active"
            aria-current="page"
          >
            <svg className="bi me-2" width="16" height="16">
              <use xlinkHref="#home"></use>
            </svg>
            Управление курсами
          </Link>
        </li>
        <li>
          <Link to="/admin/changecalligraphy" className="nav-link link-dark">
            <svg className="bi me-2" width="16" height="16">
              <use xlinkHref="#table"></use>
            </svg>
            Редактирование каллиграфий
          </Link>
        </li>
        <li>
          <Link to="/admin//updateblog" className="nav-link link-dark">
            <svg className="bi me-2" width="16" height="16">
              <use xlinkHref="#table"></use>
            </svg>
            Редактирование блога
          </Link>
        </li>
        <li>
          <Link to="paymentinfo" className="nav-link link-dark">
            <svg className="bi me-2" width="16" height="16">
              <use xlinkHref="#grid"></use>
            </svg>
            Информация об оплатах
          </Link>
        </li>
      </ul>
      <Outlet />
    </div>
  );
}

export default SideBar;
