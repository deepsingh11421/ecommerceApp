const express = require('express');
const router = express.Router();
const db = require('../../config/database');
const bcrypt = require('bcrypt');
const saltRounds = 10;

router.post('/getDataByEmail/:email',getData);
router.post('/login',login);
router.post('/signup',signupUser);

async function login(req,res){
    // console.log(req.body);
    const pass = req.body.pass;
    const data = await db.authenticateUser(req.body.email);
    // console.log(data);
    bcrypt.compare(pass, data[1].password, function(err, success) {
        // if res == true, password matched
        // else wrong password
        if(success == true){
            res.status(200).json({
                success: 'true',
                user_id: data[1].user_id,
                email: data[1].email
            })
        }else{
            res.status(200).json({
                success: 'false'
            })
        }
      });
    // res.status(200).json({success: true});
}

async function getData(req,res){
    const data = await db.getUserData(req.params['email']);

    res.status(200).json(data);
}

async function signupUser(req,res){
    const pass = req.body.pass;
    const email = req.body.email;
    const first_name = req.body.fname;
    const last_name = req.body.lname;
    const contact = req.body.contact;
    const address = req.body.address;
 
    const data = await db.userExists(email);
    if(data !== 0){
        return res.status(200).json({success: false,message: 'user already exists'});
    }

    var id = await db.getTotalUsers(email);
    id = Number.parseInt(id[0].count);
    console.log(id);

    bcrypt.genSalt(saltRounds, (err, salt) => {
        bcrypt.hash(pass, salt, (err, hash) => {
            db.createUser(id,email,hash,first_name,last_name,contact,address);
            res.status(200).json({success: true});
        });
    });
}

module.exports = router;