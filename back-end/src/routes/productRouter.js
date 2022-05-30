const { Router } = require('express');
const { getAll } = require('../controller/productController');

const productsRouter = Router();

productsRouter
  .get('/products', getAll);

module.exports = productsRouter;