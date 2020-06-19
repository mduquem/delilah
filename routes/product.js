const express = require('express');
const { getAllProducts, postAddProduct } = require('../controllers/product');

const Router = express.Router();

Router.get('/', getAllProducts);
Router.post('/', postAddProduct);

module.exports = Router;
