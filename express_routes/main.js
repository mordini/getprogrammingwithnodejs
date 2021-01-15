'use strict';

const port = 3000;
const express = require('express');
const app = express();
const homeController = require('./controllers/homeController');
const signupController = require('./controllers/signupController');

// Apply logging middleware from homeController.js
app.use(homeController.logRequestQuery);
app.use(homeController.logRequestUrl);

// tell express.js to parse URL-encoded data
app.use(
    express.urlencoded({
        extended: false
    })
);

// tell express.js to parse JSON formatted data
app.use(express.json());

// handle post route for the home page using homeController export function 'post'
app.post('/', homeController.post);

// Handle user signups
app.post('/signup', signupController.signUpProcessor);

// Handle get requests to '/items/:vegetable' using homeController export function 'sendReqParam'
app.get('/items/:vegetable', homeController.sendReqParam);

// turn the server on
app.listen(port, () => {
    console.log(`server running on port ${port}`);
});
