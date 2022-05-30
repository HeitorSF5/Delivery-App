const md5 = require('md5');
const token = require('../schema/token');
const { User } = require('../database/models');

const login = async (user) => {
  const { email, password } = user;

  const hashPassword = md5(password);

  const userLogged = await User.findOne({
    where: { email, password: hashPassword },
    attributes: { exclude: ['password'] },
  });

  if (!userLogged) return { code: 404, message: 'Invalid fields' };

  const accessToken = token({ email, password });

  return { accessToken, userLogged };
};

const register = async (userInfo) => {
  const { name, email, password } = userInfo;
  const user = await User.findOne({
    where: { email },
  });

  if (!user) {
    const hashPassword = md5(password);
    const hashPasswordUser = { name, email, password: hashPassword, role: 'customer' };
    const response = await User.create(hashPasswordUser);

    const accessToken = token({ email, password });
    return { accessToken, response };
  }

  return { code: 409, message: 'User already registered' };
};

const registerWithRole = async (userInfo) => {
  const { name, email, password, role } = userInfo;
  // console.log('\n\n in register service. Heres the info:', name, email, password, role);
  const user = await User.findOne({
    where: { email },
  });

  if (!user) {
    const hashPassword = md5(password);
    const hashPasswordUser = { 
      name, email, password: hashPassword, role,
    };
    await User.create(hashPasswordUser);

    // const accessToken = token({ email, password });
    // console.log('awaiting creation: ', await response);
    return { code: 201, message: 'ok' };
  }

  return { code: 409, message: 'User already registered' };
};

const getAll = async () => {
  const response = await User.findAll();

  return response;
};

const usersRole = async (role) => {
  const response = await User.findAll({ where: { role } });

  return response;
};

module.exports = {
  login,
  register,
  registerWithRole,
  getAll,
  usersRole,
};
