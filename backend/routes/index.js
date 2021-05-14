const express = require('express');
const router = express.Router();
const app = express();
var cors = require('cors');

app.use(cors());
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", '*');
    res.header("Access-Control-Allow-Credentials", true);
    res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
});

router.use('/user',require('./user/user'));
router.use('/product',require('./product/product'));
router.use('/category',require('./category/category'));
router.use('/cart',require('./cart/cart'));

module.exports = router;