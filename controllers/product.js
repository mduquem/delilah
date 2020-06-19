const Product = require('../models/product');

exports.getAllProducts = (req, res, next) => {
   Product.findAll()
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

exports.getProductById = (req, res, next) => {
   const { productId } = req.body;
   Product.findByPk(productId)
      .then((data) => {
         return res.status(200).json({
            message: 'Successfully retrieved a single item',
            data,
         });
      })
      .catch((error) => {
         return res.status(500).json({
            message: '500 Internal Server Error',
            error,
         });
      });
};

exports.postAddProduct = (req, res, next) => {
   const { title, price, imageUrl, description } = req.body;
   console.log('Inside add product');
   req.user
      .createProduct({
         title,
         price,
         imageUrl,
         description,
      })
      .then((data) => {
         return res.status(200).json({
            message: 'Successfully created a new product',
            data,
         });
      })
      .catch((error) => {
         return res.status(500).json({
            message: '500 Internal Server Error',
            error,
         });
      });
};

exports.putEditProduct = (req, res, next) => {
   const productId = req.params.id;
   const { title, price, imageUrl, description } = req.body;
   Product.findByPk(productId)
      .then((product) => {
         product.title = title;
         product.price = price;
         product.imageUrl = imageUrl;
         product.description = description;

         return product.save();
      })
      .then((data) => {
         return res.status(200).json({
            message: 'Product edited successfully',
            data,
         });
      })
      .catch((error) => {
         return res.status(500).json({
            message: '500 Internal Server Error',
            error,
         });
      });
};

exports.postDeleteProduct = (req, res, next) => {
   const productId = req.params.id;
   Product.findByPk(productId)
      .then((product) => {
         return product.destroy();
      })
      .then((data) => {
         return res.status(200).json({
            message: 'Product deleted successfully',
            data,
         });
      })
      .catch((error) => {
         return res.status(500).json({
            message: '500 Internal Server Error',
            error,
         });
      });
};
