const express = require('express');
const sequelize = require('../utils/database');
const Sequelize = require('sequelize');

const router = express.Router();

router.use((req, res, next) => {
   sequelize.query('SELECT * FROM Products');
   res.send(200).json({
      message: 'Hello world',
   });
});

module.exports = router;
