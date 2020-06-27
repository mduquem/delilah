const Sequelize = require('sequelize');

const sequelize = require('../utils/database');

const Order = sequelize.define('Order', {
   id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
   },
   status: {
      type: Sequelize.STRING,
      allowNull: false,
   },
   paymentAmount: {
      type: Sequelize.DOUBLE,
      allowNull: false,
   },
});

// userId: {
//    allowNull: false,
//    type: Sequelize.INTEGER,
//    references: {
//       model: 'Users',
//       key: 'id',
//    },
// },
// productId: {
//    allowNull: false,
//    type: Sequelize.INTEGER,
//    references: {
//       model: 'Products',
//       key: 'id',
//    },
// },
module.exports = Order;
