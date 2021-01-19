'use strict';

const port = 3000;
const homeController = require('./controllers/homeController.js');
const layouts = require('express-ejs-layouts');
const express = require('express');
const app = express();

app.set('view engine', 'ejs'); // set the view engine to be used
app.use(layouts); // tell app to use layouts (layout: shell in which views are rendered)


app.get('/name/:myName', homeController.respondWithName); // establish route '/name', calling to the homeController function
app.get('/name/', homeController.respondWithName); // establish route '/name', calling to the homeController function

// turn on the server
app.listen(port, () => {
    console.log(`Now listening on port ${port}.`);
});