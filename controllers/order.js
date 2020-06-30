const Order = require('../models/order');
const User = require('../models/user');
const Product = require('../models/product');

exports.postAddOrder = async (req, res, next) => {
   const { products } = req.body;

   try {
      const selectedUser = await User.findByPk(req.user.id);

      if (!selectedUser) {
         return res.status(404).json({
            error: 404,
            message: 'User Not Found',
         });
      }

      const totalAmount = 0;

      if (products.length === 0) {
         const { id, quantity } = products[0];
         const retrievedProduct = await Product.findByPk(id);
         if (!retrievedProduct) {
            console.log('ERRRRROROROROROROr');
            return res.status(404).json({
               error: 404,
               message: 'Product Not Found',
            });
         }

         const totalProductPrice = retrievedProduct.price * quantity;

         return (totalAmount += totalProductPrice);
      }

      products.map(async (product) => {
         const { id, quantity } = product;
         const retrievedProduct = await Product.findByPk(id);

         if (!retrievedProduct) {
            return res.status(404).json({
               error: 404,
               message: 'Product Not Found',
            });
         }

         const totalProductPrice = retrievedProduct.price * quantity;

         return (totalAmount += totalProductPrice);
      });

      const order = await Order.create({
         status: 'pending',
         paymentAmount: totalAmount,
      });

      products.map(async (product) => {
         const { id, quantity } = product;

         const retrievedProduct = await Product.findByPk(id);

         if (!retrievedProduct) {
            console.log('ERRORRRRRRR');
            return res.status(404).json({
               error: 404,
               message: 'Product Not Found',
            });
         }

         return await order.addProduct(retrievedProduct, {
            through: {
               quantity,
            },
         });
      });

      const response = await selectedUser.addOrder(order);

      return res.status(200).json({
         message: 'Order created successfully',
         response,
      });
   } catch (error) {
      return res.status(200).json({
         message: 'Hello User',
         error,
      });
   }
};

exports.getOwnOrder = async (req, res, next) => {
   const orderId = req.body.orderId;

   try {
      const selectedUser = await User.findByPk(req.user.id);
      const orders = await selectedUser.getOrders({
         where: {
            id: orderId,
         },
         include: [{ model: Product }],
      });

      if (!orders) {
         return res.status(404).json({
            error: 404,
            message: 'User has no orders',
         });
      }

      const order = orders.filter((order) => order.id === orderId);

      return res.status(200).json({
         message: 'Success',
         order,
      });
   } catch (error) {
      return res.status(500).json({
         error: 500,
         message: 'Internal Server Error',
      });
   }
};
