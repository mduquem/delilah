const express = require('express');
const Router = express.Router();
const { postRegisterUser, postLoginUser, postLogoutUser } = require('../controllers/auth');

Router.post('/register', postRegisterUser);
Router.post('/login', postLoginUser);
Router.post('/logout', postLogoutUser);

module.exports = Router;
