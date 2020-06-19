const express = require('express');
const { getAllUsers, postAddUser } = require('../controllers/user');

const Router = express.Router();

Router.get('/', getAllUsers);
Router.post('/', postAddUser);

module.exports = Router;
