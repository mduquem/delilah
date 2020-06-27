const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const bcrypt = require('bcrypt');

const productRoutes = require('./routes/product');
const adminRoutes = require('./routes/admin');
const orderRoutes = require('./routes/order');
const userRoutes = require('./routes/user');
const authRoutes = require('./routes/auth');

const sequelize = require('./utils/database');

const User = require('./models/user');
const Product = require('./models/product');

const Order = require('./models/order');
const ProductOrder = require('./models/productOrder');

const { isAdmin } = require('./middlewares/authenticateAdmin');
const { verifyToken } = require('./middlewares/jwt');

const app = express();

const port = 8000;

app.use(bodyParser.json());
app.use(cors());

User.hasMany(Product);

User.hasMany(Order);
Order.belongsTo(User);

Product.belongsToMany(Order, { through: ProductOrder });
// Order.belongsToMany(Product, { through: OrderProduct, unique: false });

// Product.belongsToMany(Order, {
//    through: 'ProductOrders',
//    as: ' orders',
// });

app.use('/product', productRoutes);
app.use('/auth', authRoutes);
app.use('/order', [verifyToken], orderRoutes);
app.use('/user', [verifyToken], userRoutes);
app.use('/admin', [verifyToken, isAdmin], adminRoutes);

sequelize
   .sync({ force: true })
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
