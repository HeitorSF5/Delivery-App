import React, { useEffect, useState } from 'react';
import api from '../services/api';
import getUserData from './LocalUserData';

const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
const PASSWORD_LENGTH = 6;
const MIN_NAME = 12;
// const ERR_BAD_REQUEST = 401;
// const USER_CREATED_STATUS = 201;

export default function AdmRegisterForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [role, setRole] = useState('Customer');
  const [disabled, setDisabled] = useState(true);
  const [resStatus, setResStatus] = useState('');
  const [badRequest, setBadRequest] = useState(false);

  // const navigate = useNavigate();

  useEffect(() => {
    if (emailRegex.test(email)
    && password.length >= PASSWORD_LENGTH
    && name.length >= MIN_NAME) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [name, email, password, role]);

  useEffect(() => {
    if (resStatus === 'ERR_BAD_REQUEST') return setBadRequest(true);
    return setBadRequest(false);
  }, [resStatus]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const { token } = await getUserData();
      const response = await api
        .post(
          '/admin/manage',
          { name, email, password, role }, { headers: { Authorization: token } },
        );
      setResStatus(response.code);
    } catch (err) {
      setResStatus(err.code);
      console.log('\nerror when doing an api.post', err);
    }
  };

  const invalidReqMessage = () => (
    <div data-testid="admin_manage__element-invalid-register">
      <h3>USUÁRIO JÁ EXISTE!</h3>
    </div>
  );

  return (
    <form onSubmit={ handleSubmit }>
      <label htmlFor="name">
        Nome
        <input
          data-testid="admin_manage__input-name"
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
          data-testid="admin_manage__input-email"
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
          data-testid="admin_manage__input-password"
          type="password"
          id="password"
          name="password"
          value={ password }
          onChange={ ({ target }) => setPassword(target.value) }
        />
      </label>
      <label htmlFor="role">
        Role
        <select
          value={ role }
          data-testid="admin_manage__select-role"
          onChange={ ({ target }) => setRole(target.value) }
        >
          {/* <option value="" selected disabled hidden>- - -</option> */}
          <option selected value="customer">Customer</option>
          <option value="seller">Seller</option>
          {/* <option value="Admin">Admin</option> */}
        </select>
      </label>
      <button
        type="submit"
        disabled={ disabled }
        data-testid="admin_manage__button-register"
      >
        CADASTRAR
      </button>
      { badRequest && invalidReqMessage()}
      {/* {
        user.message && (
          <span data-testid="common_register__element-invalid_register">
            Dados inválidos.
          </span>
        )
      } */}
    </form>
  );
}

// I ORIGINALLY WANTED TO MAKE A COMPONENT OUT OF THE REGULAR REGISTER FORM, BUT BECAUSE THE data-testid ARE DIFFERENT BETWEEN THEM, IT WOULD BE INFINITELY MORE TROUBLE THAN IT IS WORTH
// also styling and layout has to be different
