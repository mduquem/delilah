const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const bcrypt = require('bcrypt');

const productRoutes = require('./routes/product');
const adminRoutes = require('./routes/admin');
const orderRoutes = require('./routes/order');
const authRoutes = require('./routes/auth');

const sequelize = require('./utils/database');

const User = require('./models/user');
const Product = require('./models/product');

const Order = require('./models/order');

const { isAdmin } = require('./middlewares/authenticateAdmin');
const { verifyToken } = require('./middlewares/jwt');

const app = express();

const port = 3000;

app.use(bodyParser.json());
app.use(cors());

User.hasMany(Order, { as: 'orders' });

Product.belongsToMany(Order, { through: 'ProductOrder' });
Order.belongsToMany(Product, { through: 'ProductOrder' });

app.use('/product', productRoutes);
app.use('/auth', authRoutes);
app.use('/order', [verifyToken], orderRoutes);
app.use('/admin', [verifyToken, isAdmin], adminRoutes);

sequelize
   .sync()
   .then((result) => {
      return User.findByPk(1);
   })
   .then((user) => {
      if (!user) {
         bcrypt
            .hash('superAdmin', 10)
            .then((encryptedPassword) => {
               return User.create({
                  userName: 'SuperAdmin',
                  fullName: 'Super Admin',
                  phone: '3108274440',
                  address: 'Calle 14',
                  email: 'admin@gmail.com',
                  encryptedPassword,
                  isAdmin: true,
               });
            })
            .catch((error) => {
               console.log(error);
            });
      }
      return user;
   })
   .then((res) => {
      return app.listen(port, () => {
         console.log('Server is running in port...', port);
      });
   })
   .catch((err) => console.log('ERRORRRRR', err));
