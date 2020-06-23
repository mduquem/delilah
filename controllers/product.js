const Product = require('../models/product');
const sequelize = require('../utils/database');

exports.getAllProducts = (req, res, next) => {};

exports.getProductById = (req, res, next) => {};

exports.postAddProduct = async (req, res, next) => {
   const { title, price, imageUrl, description, userId } = req.body;

   console.log('REQUEST', req);
   console.log('Inside add product', req.body);
   try {
      const response = await sequelize.query(
         'INSERT INTO Products ( title, price, imageUrl, description, userId)  VALUES(?, ?, ?, ?, ?) ',
         {
            replacements: [title, price, imageUrl, description, userId],
         }
      );

      const data = await response.json();

      return res.status(200).json({
         message: 'Successfully created a new product',
         data,
      });
   } catch (error) {
      return res.status(500).json({
         message: '500 Internal Server Error',
         error,
      });
   }

   next();
};

exports.putEditProduct = (req, res, next) => {};

exports.putDeleteProduct = (req, res, next) => {};
