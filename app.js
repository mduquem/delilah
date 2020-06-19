const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const productRoutes = require('./routes/product');
const adminRoutes = require('./routes/admin');
const orderRoutes = require('./routes/order');
const userRoutes = require('./routes/user');
const Product = require('./models/product');
const User = require('./models/user');
const Order = require('./models/order');

const sequelize = require('./utils/database');

const app = express();

const port = 8000;

app.use(bodyParser.json());
app.use(cors);

app.use('/product', productRoutes);
app.use('/admin', adminRoutes);
app.use('/order', orderRoutes);
app.use('/user', userRoutes);

app.use((req, res, next) => {
   User.findByPk(1)
      .then((user) => {
         req.user = user;
         next();
      })
      .catch((error) => console.log(error));
});

Product.belongsTo(User, { constraints: true, onDelete: 'CASCADE' });
User.hasMany(Product);

sequelize
   .sync({ force: true })
   .then((res) => {
      return User.findByPk(1);
   })
   .then((user) => {
      if (!user) {
         return User.create({
            userName: 'mduquem',
            fullName: 'Miguel Duque',
            email: 'mduquem1@gmail.com',
            address: 'Calle 13',
            password: 'password',
            phone: '3108274440',
            isAdmin: true,
         });
      }
      return user;
   })
   .then((user) => {
      return app.listen(port, () => {
         console.log('Server is running in port...', port);
      });
   })
   .catch((err) => console.log('ERRORRRRR', err));
