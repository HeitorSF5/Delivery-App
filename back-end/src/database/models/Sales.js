module.exports = (sequelize, DataTypes) => {
  const Sale = sequelize.define('Sale', {
    totalPrice: {
      type: DataTypes.DECIMAL(9,2),
      field: 'total_price',
    },
    deliveryAddress: {
      type: DataTypes.STRING(100),
      field: 'delivery_address',
    },
    deliveryNumber: {
      type: DataTypes.STRING(50),
      field: 'delivery_number',
    },
    saleDate: {
      type: DataTypes.DATE,
      field: 'sale_date',
      defaultValue: DataTypes.NOW,
    },
    status: {
      type: DataTypes.STRING(50),
      defaultValue: 'Pendente',
    },
    userId: {
      type: DataTypes.INTEGER,
      field: 'user_id',
    },
    sellerId: {
      type: DataTypes.INTEGER,
      field: 'seller_id',
    },
  }, { timestamps: false, tableName: 'sales' });
  
  Sale.associate = (models) => {
    Sale.belongsTo(models.User, { foreignKey: 'userId', as: 'users'});
    Sale.belongsTo(models.User, { foreignKey: 'sellerId', as: 'sellers' });
  }

  return Sale;
};
