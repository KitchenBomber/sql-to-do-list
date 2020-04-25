const express = require('express');
const router = express.Router();

const pool = require('../modules/pool')


//GET Route
router.get('/', (req, res) => {
    console.log('in /tasks GET');
    let queryText = 'SELECT * FROM "tasks"';
    pool.query(queryText)
        .then((result) => {
            // console.log(result.rows);
            res.send(result.rows);
        }).catch((error) => {
            console.log(error);
            res.sendStatus(500);
        })
    // //comment out this res once working)//         res.send([];
})
//POST Route
router.post('/', (req, res) => {
    let newTask = req.body;
    console.log('POST hit:', newTask);
    let queryText = `INSERT INTO "tasks" ("description", "due")
    VALUES ($1, $2,);`;
    pool.query(queryText, [newTask.description, newTask.due])
    .then((result) => {
        res.sendStatus(201);
    }).catch((error) => {
        res.sendStatus(500);
    })
})
//Delete Route

//Put Route

module.exports = router;
