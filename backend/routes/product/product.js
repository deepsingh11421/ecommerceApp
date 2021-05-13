const express = require('express');
const router = express.Router();
const db = require('../../config/database');

router.get('/',() => {console.log('Product')});

module.exports = router;