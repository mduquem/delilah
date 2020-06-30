const express = require('express');
const { postAddOrder, getOwnOrder } = require('../controllers/order');

const Router = express.Router();

Router.post('/', postAddOrder);
Router.get('/', getOwnOrder);

module.exports = Router;
