const Sequelize = require('sequelize');

const sequelize = require('../utils/database');

const Order = sequelize.define('order', {
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

   createdAt: {
      type: Sequelize.DATE,
      default: Date.now,
   },
});

module.exports = Order;
