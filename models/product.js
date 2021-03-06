const Sequelize = require('sequelize');

const sequelize = require('../utils/database');

const Product = sequelize.define('Product', {
   id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
      unique: true,
   },
   title: {
      type: Sequelize.STRING,
      allowNull: false,
   },
   price: {
      type: Sequelize.DOUBLE,
      allowNull: false,
   },
   imageUrl: {
      type: Sequelize.STRING,
      allowNull: false,
   },
   description: {
      type: Sequelize.STRING,
      allowNull: false,
   },
});

module.exports = Product;
