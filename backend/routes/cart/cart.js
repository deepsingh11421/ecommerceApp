const express = require('express');
const router = express.Router();
const db = require('../../config/database');

router.get('/',() => {console.log('Cart')});

module.exports = router;