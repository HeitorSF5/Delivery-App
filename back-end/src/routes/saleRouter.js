const { Router } = require('express');
const { getById, create, getSaleDetail } = require('../controller/saleController');

const saleRouter = Router();

saleRouter
  .get('/sale/:id', getById)
  .post('/sale', create)
  .get('/saledetails/:id', getSaleDetail);

module.exports = saleRouter;