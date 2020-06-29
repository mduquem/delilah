const Sequelize = require('sequelize');

const sequelize = require('../utils/database');

const ProductOrder = sequelize.define('ProductOrder', {
   id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
   },
   quantity: {
      type: Sequelize.INTEGER,
      allowNull: false,
      default: 1,
   },
});

module.exports = ProductOrder;
