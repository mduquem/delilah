const Sequelize = require('sequelize');

const sequelize = require('../utils/database');

const ProductOrder = sequelize.define('ProductOrder', {
   id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
   },
});

module.exports = ProductOrder;
