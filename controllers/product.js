const Product = require('../models/product');
const sequelize = require('../utils/database');

exports.getAllProducts = async (req, res, next) => {
   try {
      const response = await Product.findAll();

      if (response.length === 0) {
         return res.status(404).json({
            error: 404,
            message: 'No products found',
         });
      }

      return res.status(200).json({
         message: 'Success: 200',
         data: response,
      });
   } catch (error) {
      console.log('PUTO ERROR', error);
      return res.status(500).json({
         message: '500 Internal Server Error',
         error,
      });
   }
};

exports.getProductById = async (req, res, next) => {
   const productId = req.params.id;

   try {
      const product = await Product.findByPk(productId);

      if (!product) {
         return res.status(404).json({
            error: 404,
            message: 'Product not found',
         });
      }

      return res.status(200).json({
         message: 'Product retrieved successfully',
         product,
      });
   } catch (error) {
      return res.status(500).json({
         error: 500,
         message: 'Internal Server Error',
      });
   }

   return res.status(200).json({
      message: 'Hello world',
   });
};
