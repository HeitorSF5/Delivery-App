const { Sale, SalesProduct, Product } = require('../database/models');

const getById = async (id) => {
  const response = await Sale.findAll({
    where: { sellerId: id },
  });

  return response;
};

const create = async (saleData) => {
  console.log(saleData);
  const { id } = await Sale.create(saleData);

await Promise.all(
saleData.cart.map(async ({ id: productId, itemQty }) => {
await SalesProduct.create({ saleId: id, productId, quantity: itemQty });
}),
); 

  return id;
};

const getSaleDetail = async (id) => {
  const response = await Sale.findOne({
    where: { id },
    include: [{
      model: Product,
      as: 'orders',
      attributes: ['id', 'name', 'price'],
      through: { attributes: ['quantity'], as: 'salesProduct' },
    }],
  });

  return response;
};

module.exports = {
  getById,
  create,
  getSaleDetail,
};
