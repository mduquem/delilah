const User = require('../models/user');
const sequelize = require('../utils/database');

exports.getAllUsers = (req, res, next) => {
   User.findAll()
      .then((data) => {
         return res.status(200).json({
            message: 'Successfully retrieved all users from database',
            data,
         });
      })
      .catch((error) => {
         return res.status(500).json({
            message: '500 Internal Server Error',
            error,
         });
      });
   next();
};

exports.postAddUser = (req, res, next) => {
   console.log('REQUEST:BODY', req);
   const { userName, fullName, email, address, password, phone, isAdmin } = req.body;

   User.create({
      userName,
      fullName,
      email,
      address,
      password,
      phone,
      isAdmin,
   })
      .then((data) => {
         return res.status(200).json({
            message: 'Successfully create a new user',
            data,
         });
      })
      .catch((error) => {
         return res.status(500).json({
            message: '500 Internal Server Error',
            error,
         });
      });

   next();
};
