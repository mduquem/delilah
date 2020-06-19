const express = require('express');
const sequelize = require('../utils/database');
const Sequelize = require('sequelize');

const Router = express.Router();

Router.get('/', () => {
   console.log('Inside user');
   sequelize.query('SELECT * FROM Users').then((res) => {
      console.log(res);
   });
});

module.exports = Router;
