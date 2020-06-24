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
   const { title, price, imageUrl, description, userId } = req.body;

   try {
      const response = await Product.create({
         title,
         price,
         imageUrl,
         description,
         userId,
      });

      if (response) {
         return res.status(200).json({
            message: 'Successfully created a new product',
            data,
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

exports.putEditProductById = (req, res, next) => {
   return res.status(200).json({
      message: 'Hello User',
   });
};

exports.putDeleteProductById = (req, res, next) => {
   return res.status(200).json({
      message: 'Hello User',
   });
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
