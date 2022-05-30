module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    name: DataTypes.STRING(255),
    email: DataTypes.STRING(255),
    password: DataTypes.STRING(255),
    role: DataTypes.STRING(255),
  },{ timestamps: false, tableName: 'users' });

  User.associate = (models) => {
    User.hasMany(models.Sale, { foreignKey: 'userId', as: 'users' });
    User.hasMany(models.Sale, { foreignKey: 'sellerId', as: 'sellers' })
  }
  return User;
};