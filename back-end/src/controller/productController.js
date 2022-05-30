const products = require('../service/productSevice');

const getAll = async (_req, res) => {
  const list = await products.getAll();

  res.status(200).json(list);
};

module.exports = {
  getAll,
};
