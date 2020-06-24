const Order = require('../models/order');

exports.postAddOrder = async (req, res, next) => {
   return res.status(200).json({
      message: 'Hello User',
   });
};

exports.getOwnOrder = async (req, res, next) => {
   return res.status(200).json({
      message: 'Hello User',
   });
};

exports.putEditOwnOrder = async (req, res, next) => {
   return res.status(200).json({
      message: 'Hello User',
   });
};
