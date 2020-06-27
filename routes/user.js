const express = require('express');

const { getOwnUser, putEditOwnUser, putDeleteOwnUser } = require('../controllers/user');

const Router = express.Router();

Router.get('/', getOwnUser);
Router.put('/edit', putEditOwnUser);
Router.put('/delete', putDeleteOwnUser);

module.exports = Router;
