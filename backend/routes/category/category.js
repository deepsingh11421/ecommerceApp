const express = require('express');
const router = express.Router();
const db = require('../../config/database');


router.get('/cat',() => {console.log('Category')});
router.get('/',() => {console.log('Category')});

module.exports = router;