'use strict';

const port = 3000;
const express = require(express); // Require express
const app = express(); // Assign express to the app

// set up a 'GET' route for the home page
app.get('/', (req, res) => {
    res.send('Hello, Universe!'); // issue a response from the server to the client with res.send
}).listen(port, () => { // listen on the specified port
    console.log(`The Express.js server has started and is listening on port: ${port}`);
});