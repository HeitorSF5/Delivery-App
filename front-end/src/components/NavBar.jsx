import React from 'react';
import PropTypes from 'prop-types';
import NavBarButtons from './NavBarButtons';

function NavBar({ pageName }) {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a
            className="navbar-brand"
            href="myProduct"
            data-testid="customer_products__element-navbar-link-products"
          >
            {pageName}
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <NavBarButtons />
        </div>
      </nav>
    </div>
  );
}

export default NavBar;

NavBar.propTypes = {
  pageName: PropTypes.string.isRequired,
};
