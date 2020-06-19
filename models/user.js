const Sequelize = require('sequelize');

const sequelize = require('../utils/database');

const Users = sequelize.define('User', {
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
      default: false,
   },
   phone: {
      type: Sequelize.STRING,
      allowNull: false,
   },
});

module.exports = Users;
