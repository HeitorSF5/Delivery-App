const sale = require('../service/saleService');

const getById = async (req, res) => {
  const { id } = req.params;
  
  const response = await sale.getById(id);

  res.status(200).json(response);
};

const create = async (req, res) => {
  const saleData = req.body;

  const id = await sale.create(saleData);

  res.status(201).json(id);
};

const getSaleDetail = async (req, res) => {
  const { id } = req.params;

  const response = await sale.getSaleDetail(id);

  res.status(200).json(response);
};

module.exports = {
  getById,
  create,
  getSaleDetail,
};
