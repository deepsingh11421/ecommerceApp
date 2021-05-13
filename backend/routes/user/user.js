const express = require('express');
const router = express.Router();
const db = require('../../config/database');

router.get('/getDataByEmail/:email',getData);


async function getData(req,res){
    const data = await db.getUserData(req,res);
    res.status(200).json(data);
}

module.exports = router;