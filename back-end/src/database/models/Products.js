module.exports = (sequelize, DataTypes) => {
  const product = sequelize.define('Product', {
    name: DataTypes.STRING(100),
    price: DataTypes.DECIMAL(4, 2),
    urlImage: {
      type: DataTypes.STRING(200),
      field: 'url_image'
    }
  }, { timestamps: false, tableName: 'products' });
  
  return product;
};