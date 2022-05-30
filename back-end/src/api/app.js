const express = require('express');
const cors = require('cors');
const userRouter = require('../routes/userRouter');
const productRouter = require('../routes/productRouter');
const saleRouter = require('../routes/saleRouter');
const adminRouter = require('../routes/adminRouter');
const verifyAuthorization = require('../middlewares/authorization');

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static('public'));
app.use(userRouter);
app.use(verifyAuthorization);
// FOR TESTING

app.use(adminRouter);
app.use(productRouter);
app.use(saleRouter);

module.exports = app;
