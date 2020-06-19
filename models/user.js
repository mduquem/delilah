const Sequelize = require('sequelize');

const sequelize = require('../utils/database');

const Order = sequelize.define('order', {
   id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
   },
   userName: {
      type: Sequelize.STRING,
      allowNull: false,
   },
   fullName: {
      type: Sequelize.STRING,
      allowNull: false,
   },
   email: {
      type: Sequelize.STRING,
      allowNull: false,
   },
   address: {
      type: Sequelize.STRING,
      allowNull: false,
   },
   password: {
      type: Sequelize.STRING,
      allowNull: false,
   },
   isAdmin: {
      type: Sequelize.BOOLEAN,
      allowNull: false,
   },
   phone: {
      type: Sequelize.INTEGER,
      allowNull: false,
   },

   createdAt: {
      type: Sequelize.DATE,
      default: Date.now,
   },
});

module.exports = Order;
