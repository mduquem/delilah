const Product = require('../models/product');
const sequelize = require('../utils/database');

exports.getAllProducts = async (req, res, next) => {
   try {
      const response = await sequelize.query('SELECT * FROM Products');
      const responseProducts = await response.json();
      return res.status(200).json({
         message: 'Success: 200',
         data: responseProducts,
      });
   } catch (error) {
      return res.status(500).json({
         message: '500 Internal Server Error',
         error,
      });
   }
};

exports.getProductById = (req, res, next) => {
   return res.status(200).json({
      message: 'Hello world',
   });
};
