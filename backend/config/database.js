const Pool = require('pg').Pool;

const pool = new Pool({
    host: 'localhost',
    port: 5432,
    user: 'postgres',
    password: 'DEEPS!NGH',
    database: 'citymall'
});

async function getAllData(request,response) {
    const data = await pool.query('select * from testtable');
    return data.rows;
}

async function getUserData(request,response) {
    const email = request.params['email'];
    const data = await pool.query('select * from cityusers where email = $1',[email]);
    return data.rows;
}

module.exports = {
    getAllData,
    getUserData
}

