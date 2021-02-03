'use strict';

const port = 3000;
const express = require('express'); // Require express
const app = express(); // Assign express to the app

// set up a 'GET' route for the home page (handler)
app.get('/', (req, res) => {
    res.send('Hello, Universe!'); // issue a response from the server to the client with res.send

    if (1 === 1) { // just checking things out
        console.log(`req.params:`);
        console.log(req.params);
        console.log(`req.body: ${req.body}`);
        console.log(`req.url: ${req.url}`);
        console.log(`req.query:`);
        console.log(req.query);
    }

}).listen(port, (req) => { // listen on the specified port
    console.log(`The Express.js server has started and is listening on port: ${port}`);
});