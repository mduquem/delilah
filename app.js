const express = require('express');

const productRoutes = require('./routes/product');
const adminRoutes = require('./routes/admin');
const orderRoutes = require('./routes/order');
const userRoutes = require('./routes/user');

const sequelize = require('./utils/database');

const app = express();

const port = 8000;

app.use('/product', productRoutes);
app.use('/admin', adminRoutes);
app.use('/order', orderRoutes);
app.use('/user', userRoutes);

sequelize
   .sync()
   .then((res) => {
      app.listen(port, () => {
         console.log('Server is running in port...', port);
      });
   })
   .catch((err) => console.log('ERRORRRRR', err));
