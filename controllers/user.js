const User = require('../models/user');

exports.getOwnUser = async (req, res, next) => {
   return res.status(200).json({
      message: 'Hello',
   });
};

exports.putEditOwnUser = async (req, res, next) => {
   return res.status(200).json({
      message: 'Hello User',
   });
};

exports.putDeleteOwnUser = async (req, res, next) => {
   return res.status(200).json({
      message: 'Hello User',
   });
};
