const express = require('express');
const {
   getAllUsers,
   postAddProduct,
   putEditProductById,
   deleteDeleteProductById,
   getAllOrders,
   putEditOrderById,
   deleteOrderById,
} = require('../controllers/admin');

const Router = express.Router();

// USERS

Router.get('/user', getAllUsers);

// PRODUCTS
Router.post('/product', postAddProduct);
Router.put('/product/edit/:id', putEditProductById);
Router.delete('/product/delete/:id', deleteDeleteProductById);

// ORDERS
Router.get('/order', getAllOrders);
Router.put('/order/edit/:id', putEditOrderById);
Router.delete('/order/:id', deleteOrderById);

module.exports = Router;
