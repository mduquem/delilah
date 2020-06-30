const Product = require('../models/product');
const User = require('../models/user');

const Order = require('../models/order');

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
exports.getAllOrders = async (req, res, next) => {
   try {
      const orders = await Order.findAll();
      if (orders.length === 0) {
         return res.status(404).json({
            error: 404,
            message: 'No Orders Available',
         });
      }
      return res.status(200).json({
         message: 'Successfully retrieved all orders from database',
         orders,
      });
   } catch (error) {
      console.log('ERRRRROR', error);
      return res.status(500).json({
         message: '500 Internal Server Error',
         error,
      });
   }
};

exports.putEditOrderById = async (req, res, next) => {
   const orderId = req.params.id;
   const { status } = req.body;
   try {
      const order = await Order.findByPk(orderId);
      if (!order) {
         return res.status(404).json({
            error: 404,
            message: 'Order Not Found',
         });
      }

      order.status = status;

      await order.save();

      return res.status(200).json({
         message: 'Order Updated Successfully',
      });
   } catch (error) {
      return res.status(500).json({
         error: 500,
         message: 'Internal Server Error',
      });
   }
};
