import React from 'react';

export default function NavBarButtons() {
  const [name, setName] = useState('');

  useEffect(() => {
    setName(JSON.parse(localStorage.getItem('userData')).name);
  }, []);

  const logout = () => {
    localStorage.removeItem('userData');
  };

  return (
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a
            className="nav-link"
            aria-current="page"
            href="/customer/checkout"
            data-testid="customer_products__element-navbar-link-orders"
          >
            MEUS PEDIDOS
          </a>
        </li>

        <li className="nav-item">
          <a
            className="nav-link"
            href="myUser" // qual link?
            data-testid=" customer_products__element-navbar-user-full-name"
          >
            { name }
          </a>
        </li>

        <li className="nav-item">
          <a
            className="nav-link"
            href="/login"
            onClick={ logout }
            data-testid="customer_products__element-navbar-link-logout"
          >
            SAIR
          </a>
        </li>
      </ul>
    </div>
  );
}
