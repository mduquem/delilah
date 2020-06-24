const User = require('../models/user');

exports.getOwnUser = async (req, res, next) => {
   return res.status(200).json({
      message: 'Hello',
   });
};

exports.postAddUser = async (req, res, next) => {
   const { userName, fullName, email, address, password, phone } = req.body;

   try {
      const databaseResponse = await User.create({
         userName,
         fullName,
         email,
         address,
         phone,
         isAdmin: false,
         encryptedPassword: password,
      });

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
