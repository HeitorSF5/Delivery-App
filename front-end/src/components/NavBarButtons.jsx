import React from 'react';
import { Link } from 'react-router-dom';
import LocalUserData from './LocalUserData';

export default function NavBarButtons() {
  const { name } = LocalUserData();
  const handleLogout = () => {
    localStorage.clear();
  };
  return (
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a
            className="nav-link"
            aria-current="page"
            href="myOrders"
            data-testid="customer_products__element-navbar-link-orders"
          >
            MEUS PEDIDOS
          </a>
        </li>

        <li className="nav-item">
          <a
            className="nav-link"
            href="myUser"
            data-testid="customer_products__element-navbar-user-full-name"
          >
            { name || 'teste'}
          </a>
        </li>

        <li className="nav-item">
          <Link
            className="nav-link"
            // href="login"
            to="/login"
            data-testid="customer_products__element-navbar-link-logout"
            onClick={ handleLogout }
          >
            SAIR
          </Link>
        </li>
      </ul>
    </div>
  );
}
