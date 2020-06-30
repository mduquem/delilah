const User = require('../models/user');
const Product = require('../models/product');

const Order = require('../models/order');

const bcrypt = require('bcrypt');
const { generateToken, verifyToken } = require('../middlewares/jwt');

exports.postLoginUser = async (req, res, next) => {
   const { email, password } = req.body;
   try {
      const user = await User.findAll({
         where: {
            email: email,
         },
      });

      const validPassword = await bcrypt.compare(password, user[0].encryptedPassword);

      if (!validPassword) {
         return res.status(403).json({
            error: 403,
            message: 'Invalid credentials',
         });
      }

      const token = generateToken(user[0]);

      return res.status(200).json({
         message: 'Success',
         token: token,
      });
   } catch (error) {
      console.log('ERROR', error);

      return res.status(500).json({ error: 500, message: 'Internal Server Error' });
   }
};

exports.postRegisterUser = async (req, res, next) => {
   const { userName, fullName, email, address, password, phone } = req.body;
   const encryptedPassword = await bcrypt.hash(password, 10);

   try {
      const user = await User.findAll({
         where: {
            email: email,
         },
      });

      if (user.length > 0) {
         return res.status(403).json({
            error: 403,
            message: 'Email already in use. ',
         });
      }

      const databaseResponse = await User.create({
         userName,
         fullName,
         email,
         address,
         phone,
         isAdmin: false,
         encryptedPassword,
      });

      const token = generateToken(databaseResponse);

      if (databaseResponse) {
         return res.status(200).json({
            message: '200',
            response: {
               token,
            },
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
