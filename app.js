const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const productRoutes = require('./routes/product');
const adminRoutes = require('./routes/admin');
const orderRoutes = require('./routes/order');
const userRoutes = require('./routes/user');

const sequelize = require('./utils/database');

const isAdmin = require('./middlewares/authenticateAdmin');

const app = express();

const port = 8000;

app.use(bodyParser.json());
app.use(cors());

// User.hasMany(Product); // This is the default
// Product.belongsTo(User, { constraints: true, onDelete: 'CASCADE' });

app.use('/product', productRoutes);
app.use('/admin', [isAdmin], adminRoutes);
app.use('/order', orderRoutes);
app.use('/user', userRoutes);

sequelize
   .sync()
   .then((res) => {
      return app.listen(port, () => {
         console.log('Server is running in port...', port, 'with response');
      });
   })
   .catch((err) => console.log('ERRORRRRR', err));
