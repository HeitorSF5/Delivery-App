import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import api from '../services/api';
import '../styles/pages/login.css';

const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
const PASSWORD_LENGTH = 6;

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [user, setUser] = useState({});
  const [disabled, setDisabled] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    if (emailRegex.test(email) && password.length >= PASSWORD_LENGTH) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [email, password]);

  async function onSubmit(event) {
    event.preventDefault();
    try {
      const response = await api.post('login', { email, password });
      setUser(response.data);

      const userData = {
        id: response.data.userLogged.id,
        name: response.data.userLogged.name,
        email: response.data.userLogged.email,
        role: response.data.userLogged.role,
        token: response.data.accessToken,
      };

      localStorage.user = JSON.stringify(userData);

      if (response.data.userLogged.role === 'customer') {
        navigate('/products');
      } else if (response.data.userLogged.role === 'administrator') {
        return navigate('/admin/manage');
      }
      navigate('/seller/orders');
    } catch (error) {
      setUser(error);
    }
  }

  return (
    <main>
      <h1>Delivery App</h1>
      <form onSubmit={ onSubmit }>
        <label htmlFor="email">
          Email
          <input
            data-testid="common_login__input-email"
            type="text"
            id="email"
            name="email"
            value={ email }
            onChange={ ({ target }) => setEmail(target.value) }
          />
        </label>
        <label htmlFor="password">
          Password
          <input
            data-testid="common_login__input-password"
            type="password"
            id="password"
            name="password"
            value={ password }
            onChange={ ({ target }) => setPassword(target.value) }
          />
        </label>
        <button
          data-testid="common_login__button-login"
          type="submit"
          disabled={ disabled }
        >
          Login
        </button>
        <Link to="/register">
          <button
            data-testid="common_login__button-register"
            type="button"
          >
            Ainda não tenho conta
          </button>
        </Link>
        {
          user.message && (
            <span data-testid="common_login__element-invalid-email">
              Invalid fields
            </span>
          )
        }
      </form>
    </main>
  );
}

export default Login;
