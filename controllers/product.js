const Product = require('../models/product');
const sequelize = require('../utils/database');

exports.getAllProducts = (req, res, next) => {
   sequelize
      .query('SELECT * FROM Products')
      .then((data) => {
         return res.status(200).json({
            message: 'All Products successfully retrieved',
            data,
         });
      })
      .catch((error) => {
         return res.status(500).json({
            message: '500 Internal Server Error',
            error,
         });
      });
   next();
};

exports.postAddProduct = (req, res, next) => {
   const { title, price, imageUrl, description } = req.body;

   Product.create({
      title,
      price,
      imageUrl,
      description,
   })
      .then((data) => {
         return res.status(200).json({
            message: 'Successfully create a new product',
            data,
         });
      })
      .catch((error) => {
         return res.status(500).json({
            message: '500 Internal Server Error',
            error,
         });
      });
   next();
};
