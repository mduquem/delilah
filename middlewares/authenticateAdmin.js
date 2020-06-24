const isAdmin = (req, res, next) => {
   if (!req.user.admin) {
      return res.status(403).json({
         message: 'Error. Please request necessary permissions',
         errorr: '403. This is an admin protected route',
      });
   }
   next();
};

module.exports = isAdmin;
