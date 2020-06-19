const Sequelize = require('sequelize');

const sequelize = require('../utils/database');

const Order = sequelize.define('Order', {
   id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
   },
   status: {
      type: Sequelize.STRING,
      allowNull: false,
   },
   paymentAmount: {
      type: Sequelize.DOUBLE,
      allowNull: false,
   },
});

module.exports = Order;
