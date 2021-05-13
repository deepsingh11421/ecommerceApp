const express = require('express');
const router = express.Router();

router.use('/user',require('./user/user'));
router.use('/product',require('./product/product'));
router.use('/category',require('./category/category'));
router.use('/cart',require('./cart/cart'));

module.exports = router;