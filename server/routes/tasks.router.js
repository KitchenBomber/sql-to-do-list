const express = require('express');
const router = express.Router();

const pool = require('../modules/pool');


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
        });
    // //comment out this res once working)//         res.send([];
})
//POST Route
router.post('/', (req, res) => {
    let newTask = req.body;
    console.log('POST hit:', newTask);
    let queryText = `INSERT INTO "tasks" ("description", "due")
    VALUES ($1, $2);`
    pool.query(queryText, [newTask.description, newTask.due])
        .then(result => {
            res.sendStatus(201);
        }).catch(error => {
            console.log(error);
            res.sendStatus(500);
        });
})
//Delete Route
router.delete('/:id', (req, res) => {
    console.log('in /tasks DELETE:', req.params.id);
    let queryString = `DELETE FROM "tasks" Where id=$1`;
    pool.query(queryString, [req.params.id])
        .then((result) => {
            res.sendStatus(200);
        }).catch((error) => {
        console.log(error);
        res.sendStatus(500);
    })
})//END DELETE ROUTE

//Put Route
router.put('/:id', (req, res) => {
    console.log('in PUT /tasks', req.params.id);
    // console.log('put body', req.body);
   let queryString = `UPDATE "tasks" SET "completed" = NOT "completed" where "id" = $1`;
   pool.query(queryString, [req.params.id])
    .then((result) => {
        res.sendStatus(200);
    }).catch((error) => {
        console.log(error);
        res.sendStatus(500);
    })
    // res.send('put this away later')
})
module.exports = router;
