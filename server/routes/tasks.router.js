let express = require('express');
let router = express.Router();
let pg = require('pg');

const Pool = pg.Pool;
const pool = new Pool({
    database: 'weekend-to-do-app',
    host: 'localhost',
    port: 5432,
    max: 10,
    idleTimeoutMillis: 30000
});

pool.on('connect', ()=> {
    console.log('postgres connected');
});
pool.on('error', (error) => {
    console.log('eror with postgres pool', error); 
});

//GET Route

//POST Route

//Delete Route

//Put Route

module.exports = router;
