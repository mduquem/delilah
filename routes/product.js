const express = require('express');
const {
   getAllProducts,
   postAddProduct,
   putEditProduct,
   putDeleteProduct,
   getProductById,
} = require('../controllers/product');

const router = express.Router();

router.get('/', getAllProducts);
router.get('/:id', getProductById);
router.post('/', postAddProduct);
router.put('/:id', putEditProduct);
router.patch('/:id', putDeleteProduct);

module.exports = router;
