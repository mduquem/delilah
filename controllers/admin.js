const Product = require('../models/product');

// USER ROUTES
exports.getAllUsers = (req, res, next) => {
   User.findAll()
      .then((data) => {
         return res.status(200).json({
            message: 'Successfully retrieved all users from database',
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

exports.postAddAdminUser = async (req, res, next) => {
   return res.status(200).json({
      message: 'Hello World',
   });
};

exports.getUserById = async (req, res, next) => {
   return res.status(200).json({
      message: 'Hello User',
   });
};

exports.putEditUserById = async (req, res, next) => {
   return res.status(200).json({
      message: 'Hello User',
   });
};
exports.putDeleteUserById = async (req, res, next) => {
   return res.status(200).json({
      message: 'Hello User',
   });
};

// PRODUCT ROUTES
exports.postAddProduct = async (req, res, next) => {
   const { title, price, imageUrl, description } = req.body;

   try {
      const response = await Product.create({
         title,
         price,
         imageUrl,
         description,
      });

      if (response) {
         return res.status(200).json({
            message: 'Successfully created a new product',
            response,
         });
      }

      next();
   } catch (error) {
      return res.status(500).json({
         message: '500 Internal Server Error',
         error,
      });
   }
};

exports.putEditProductById = async (req, res, next) => {
   const productId = req.params.id;
   const { title, price, imageUrl, description } = req.body;
   try {
      Product.findByPk(productId).then((product) => {
         product.title = title;
         product.price = price;
         product.imageUrl = imageUrl;
         product.description = description;
         return product.save();
      });

      return res.status(200).json({
         message: 'Product updated successfully',
      });
   } catch (error) {
      console.log(error);
      return res.status(500).json({
         error: 500,
         message: 'Internal Server Error',
      });
   }
};

exports.deleteDeleteProductById = async (req, res, next) => {
   const productId = req.params.id;

   try {
      const product = await Product.findByPk(productId);

      const response = await product.destroy();
      return res.status(200).json({
         message: 'Product deleted succesfully',
         response,
      });
   } catch (error) {
      return res.status(500).json({
         error: 500,
         message: 'Internal Server Error',
      });
   }
};

// ORDER ROUTES
exports.getAllOrders = (req, res, next) => {
   Order.findAll()
      .then((data) => {
         return res.status(200).json({
            message: 'Successfully retrieved all users from database',
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

exports.postAddOrder = async (req, res, next) => {
   return res.status(200).json({
      message: 'Hello User',
   });
};

exports.getOrderById = async (req, res, next) => {
   return res.status(200).json({
      message: 'Hello User',
   });
};

exports.putEditOrderById = async (req, res, next) => {
   return res.status(200).json({
      message: 'Hello User',
   });
};
exports.putDeleteOrderById = async (req, res, next) => {
   return res.status(200).json({
      message: 'Hello User',
   });
};
