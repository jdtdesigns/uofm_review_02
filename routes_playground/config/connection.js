const { Sequelize } = require('sequelize');

const connection = new Sequelize('routes_playground', 'root', '', {
  host: 'localhost',
  dialect: 'mysql'
});

module.exports = connection;