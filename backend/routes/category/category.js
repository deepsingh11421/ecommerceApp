const express = require('express');
const router = express.Router();
const db = require('../../config/database');

router.get('/allWithSubcategory',allWithSubcategory);
router.get('/',() => {console.log('Category')});

async function allWithSubcategory(req,res) {
    const data = await db.allcategoryWithSubcategory(req,res);
    var parsedData = {};
    for(let i=0;i<data.length;i++){
        if(parsedData[data[i].category_id] === null || parsedData[data[i].category_id] === undefined){
            parsedData[data[i].category_id] = [{
                ...data[i]
            }]
        }else{
            parsedData[data[i].category_id].push({...data[i]});
        }
    }
    res.status(200).json(parsedData);
}

module.exports = router;