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

exports.postAddUser = async (req, res, next) => {
   console.log('REQUEST:BODY', req);
   const { userName, fullName, email, address, encryptedPassword, phone, isAdmin } = req.body;

   try {
      const databaseResponse = await sequelize.query(
         'INSERT INTO Users (userName, fullName, email, address, phone, isAdmin, encryptedPassword) VALUES (?,?,?,?,?,?,?)',
         {
            replacements: [userName, fullName, email, address, phone, isAdmin, encryptedPassword],
         }
      );
      if (databaseResponse) {
         return res.status(200).json({
            message: '200',
            response: databaseResponse,
         });
      }
      next();
   } catch (error) {
      return res.status(500).json({
         message: '500 Internal Server Error',
         error,
      });
   }
};
