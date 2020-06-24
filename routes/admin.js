const express = require('express');
const {
   getAllUsers,
   postAddAdminUser,
   getUserById,
   putEditUserById,
   putDeleteUserById,
   postAddProduct,
   putEditProductById,
   putDeleteProductById,
   getAllOrders,
   postAddOrder,
   getOrderById,
   putEditOrderById,
   putDeleteOrderById,
} = require('../controllers/admin');

const Router = express.Router();

// USERS

Router.get('/user', getAllUsers);
Router.get('/user/:id', getUserById);
Router.post('/user', postAddAdminUser);
Router.put('/user/edit/:id', putEditUserById);
Router.put('/user/delete/:id', putDeleteUserById);

// PRODUCTS
Router.post('/product', postAddProduct);
Router.put('/product/edit/:id', putEditProductById);
Router.put('/product/delete/:id', putDeleteProductById);

// ORDERS
Router.get('/order', getAllOrders);
Router.post('/order', postAddOrder);
Router.get('/order/:id', getOrderById);
Router.put('/order/edit/:id', putEditOrderById);
Router.put('/order/delete/:id', putDeleteOrderById);

module.exports = Router;
