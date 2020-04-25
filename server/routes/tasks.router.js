const express = require('express');
const router = express.Router();

const pool = require('../modules/pool')


//GET Route
router.get('/', (req, res) => {
    console.log('in /tasks GET');
    let queryText = 'SELECT * FROM "tasks"';
    pool.query(queryText)
        .then((result) => {
            console.log(result.rows);
            res.send(result.rows);
        }).catch((error) => {
            console.log(error);
            res.sendStatus(500);  
        })
// //comment out this res once working)//         res.send([];
})
//POST Route

//Delete Route

//Put Route

module.exports = router;
