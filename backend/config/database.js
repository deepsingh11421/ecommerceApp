const Pool = require('pg').Pool;

const pool = new Pool({
    host: 'localhost',
    port: 5432,
    user: 'postgres',
    password: 'DEEPS!NGH',
    database: 'citymall'
});

// select  citycategory.*,cityproducts.* from cityproducts left join citycategory on cityproducts.category_id = citycategory.category_id order by citycategory.category_id
// select sub.*,cat.category_name from citysubcategory as sub join citycategory as cat on sub.category_id = cat.category_id order by cat.category_id;
async function getAllData(request,response) {
    const data = await pool.query('select * from testtable');
    return data.rows;
}

async function userExists(email){
    const data = await pool.query('select * from cityusers where email = $1 ',[email]);
    return data.rows.length;
}

async function authenticateUser(email){
    // const pass = request.body.pass;
    const data = await pool.query('select * from cityusers where email = $1 ',[email]);
    return data.rows;
}

async function createUser(id,email,pass,fname,lname,contact,address) {
    const data = await pool.query('insert into cityusers (user_id,first_name,last_name,contact,email,address,password) values ($1,$2,$3,$4,$5,$6,$7)',[id,fname,lname,contact,email,address,pass]);
}

async function getTotalUsers(email) {
    const data = await pool.query('select count(*) from cityusers');
    return data.rows;
}

async function getUserData(email) {
    const data = await pool.query('select * from cityusers where email = $1',[email]);
    return data.rows;
}

async function allcategoryWithSubcategory(request,response) {
    const data = await pool.query('select sub.*,cat.category_name from citysubcategory as sub join citycategory as cat on sub.category_id = cat.category_id order by cat.category_id;');
    return data.rows;
}

module.exports = {
    getAllData,
    getUserData,
    allcategoryWithSubcategory,
    createUser,
    authenticateUser,
    userExists,
    getTotalUsers
}

