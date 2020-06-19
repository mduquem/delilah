const express = require('express');
const {
   getAllProducts,
   postAddProduct,
   putEditProduct,
   postDeleteProduct,
} = require('../controllers/product');

const Router = express.Router();

Router.get('/', getAllProducts);
Router.post('/', postAddProduct);
Router.put('/:id', putEditProduct);
Router.delete('/:id', postDeleteProduct);

module.exports = Router;
