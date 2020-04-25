const express = require('express');
const app = express();
const bodyParser = require( 'body-parser' );

app.use( express.static( 'server/public' ) );
app.use( bodyParser.urlencoded( { extended: true } ) );

const tasksRouter = require('./routes/tasks.router.js');
app.use('/tasks', tasksRouter );

app.listen(5000, ()=>{
    console.log( 'server listening at http://localhost:5000');
})

