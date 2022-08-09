const { DataTypes, Model } = require('sequelize');

class User extends Model { }

User.init({
  // Model attributes are defined here
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  }
}, {
  // Other model options go here
  sequelize: require('../config/connection'), // We need to pass the connection instance
  modelName: 'user' // We need to choose the model name
});

module.exports = User;