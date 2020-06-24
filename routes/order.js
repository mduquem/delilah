const express = require('express');
const { postAddOrder, getOwnOrder, putEditOwnOrder } = require('../controllers/order');

const Router = express.Router();

Router.post('/', postAddOrder);
Router.get('/', getOwnOrder);
Router.put('/', putEditOwnOrder);

module.exports = Router;
