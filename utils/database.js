const Sequelize = require('sequelize');

const sequelize = new Sequelize('mysql://user:password@127.0.0.1:3306/db');

module.exports = sequelize;
