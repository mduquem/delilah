const express = require('express');
const {
   getOwnUser,
   postAddUser,
   putEditOwnUser,
   putDeleteOwnUser,
} = require('../controllers/user');

const Router = express.Router();

Router.get('/', getOwnUser);
Router.post('/register', postAddUser);
Router.put('/edit', putEditOwnUser);
Router.put('/delete', putDeleteOwnUser);

module.exports = Router;
