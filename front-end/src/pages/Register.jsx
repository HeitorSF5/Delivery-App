import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../services/api';
import '../styles/pages/login.css';

const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
const PASSWORD_LENGTH = 6;
const MIN_NAME = 12;

function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [user, setUser] = useState({});
  const [disabled, setDisabled] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    if (emailRegex.test(email) && password.length >= PASSWORD_LENGTH
    && name.length >= MIN_NAME) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [name, email, password]);

  async function handleSubmit(event) {
    event.preventDefault();
    try {
      const registerUser = await api.post('register', { name, email, password });
      setUser(registerUser.data);

      const userData = {
        id: registerUser.data.response.id,
        name: registerUser.data.response.name,
        email: registerUser.data.response.email,
        role: registerUser.data.response.role,
        token: registerUser.data.accessToken,
      };
      localStorage.setItem('user', JSON.stringify(userData));

      // localStorage.userData = JSON.stringify(userData);
      navigate('/customer/products');
    } catch (error) {
      console.log(error);
      setUser(error);
    }
  }

  return (
    <main>
      <h1>Delivery App</h1>
      <form onSubmit={ handleSubmit }>
        <label htmlFor="name">
          Nome
          <input
            data-testid="common_register__input-name"
            type="text"
            id="name"
            name="name"
            value={ name }
            onChange={ ({ target }) => setName(target.value) }
          />
        </label>
        <label htmlFor="email">
          Email
          <input
            data-testid="common_register__input-email"
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
            data-testid="common_register__input-password"
            type="password"
            id="password"
            name="password"
            value={ password }
            onChange={ ({ target }) => setPassword(target.value) }
          />
        </label>
        <button
          data-testid="common_register__button-register"
          type="submit"
          disabled={ disabled }
        >
          CADASTRAR
        </button>
        {
          user.message && (
            <span data-testid="common_register__element-invalid_register">
              Dados inválidos.
            </span>
          )
        }
      </form>
    </main>
  );
}

export default Register;
