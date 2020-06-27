const jwt = require('jsonwebtoken');

const signature = 'Acamica123456789$';

exports.generateToken = (data) => {
   return jwt.sign(
      {
         user: data,
      },
      signature,
      { expiresIn: 60 * 60 }
   );
};

exports.verifyToken = (req, res, next) => {
   if (!req.headers.authorization) {
      res.status(401).json({
         message: 'Token not provided',
      });
   }

   try {
      const token = req.headers.authorization.split(' ')[1];
      jwt.verify(token, signature, (error, decoded) => {
         if (error) {
            return res.status(403).json({ message: '403 Unauthorized' });
         }
         req.user = decoded.user;
         next();
      });
   } catch (error) {
      return res.status(401).json({ message: 'Token not provided' });
   }
};
