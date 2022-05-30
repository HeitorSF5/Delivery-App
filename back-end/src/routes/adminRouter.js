const { Router } = require('express');
const { registerWithRole } = require('../controller/userController');
const { registerWithRoleValidator } = require('../middlewares/userValidator');

const adminRouter = Router();

adminRouter
  .post('/admin/manage', registerWithRoleValidator, registerWithRole);

module.exports = adminRouter;