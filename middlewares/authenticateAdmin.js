exports.isAdmin = (req, res, next) => {
   if (!req.user.isAdmin) {
      return res.status(403).json({
         message: 'Error. Please request necessary permissions',
         errorr: '403. This is an admin protected route',
      });
   }
   next();
};
