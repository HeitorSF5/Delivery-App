// import verifyAuthorization from './authorization';
// const { validate } = require('joi');
const { loginSchema, registerSchema, registerWithRoleSchema } = require('../schema/userchema');

const loginValidator = async (req, res, next) => {
  const user = req.body;
  const validate = loginSchema.validate(user);

  if (validate.error !== undefined) {
    return res.status(400).json({ message: validate.error.details[0].message });
  }
  next();
};

const registerValidator = async (req, res, next) => {
  const user = req.body;

  const validate = registerSchema.validate(user);

  if (validate.error !== undefined) {
    return res.status(400).json({ message: validate.error.details[0].message });
  }
  next();
};

const registerWithRoleValidator = async (req, res, next) => {
  // console.log('\n CHECKING ADMIN REQ DATA', req.body);
  const validate = registerWithRoleSchema.validate(req.body);

  if (validate.error !== undefined) {
    return res.status(400).json({ message: validate.error.details[0].message });
  }
  next();
};

module.exports = {
  loginValidator,
  registerValidator,
  registerWithRoleValidator,
};