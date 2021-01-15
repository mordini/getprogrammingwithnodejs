'use strict';

const port = 3000;
const express = require('express');
const app = express();
const homeController = require('./controllers/homeController');

// MOVED TO controller
// JUST AN EXAMPLE OF POST
// app.post('contact', (req, res) => { // handle requestsd with the express.js POST method
//     res.send('contact information submitted successfully');
// });

// BEGIN MIDDLEWARE TEST SECTION, RUN IN ORDER

app.use((req, res, next) => { // define a middleware function using 'use', use it in app
    console.log(`main.js app.use middleware ONE ftw`);
    // console.log(`request made to ${req.url}`); // log the request for demo
    next(); //call the next function.  without this, it will hang
});

// Apply middleware from homeController.js
app.use(homeController.logRequestQuery);
app.use(homeController.logRequestUrl);

// middleware function two, for demonstration
app.use((req, res, next) => {
    console.log(`main.js app.use middleware TWO ftw`);
    // console.log(`requested query:`);
    // console.log(req.query); // checking the query (parameters) in the URL (example): http://localhost:3000/?firstname=steve&lastname=reeves
    next();
});

// END MIDDLEWARE TEST SECTION, RUN IN ORDER

// tell express.js to parse URL-encoded data
app.use(
    express.urlencoded({
        extended: false
    })
);

// tell express.js to parse JSON formatted data
app.use(express.json());

// handle post route for the home page using homeController export function 'post'
app.post('/', homeController.post);  // curl --date "first_name=Steve&last_name=Reeves" http://localhost:3000

// Handle get requests to '/items/:vegetable' using homeController export function 'sendReqParam'
app.get('/items/:vegetable', homeController.sendReqParam);

// MOVED TO controller
// // create a new post route for the home page
// app.post('/', (req, res) => {
//     console.log(req.body);  // log the request's body
//     console.log(req.query);
//     res.send('POST successful!');
// });

// // adding route to get URL parameters
// app.get('/items/:vegetable', (req, res) => { //catch the vegetable param in /items (try /items/corn)
//     console.log(`end of the line`);

//     let veg = req.params.vegetable;
//     res.send(`this is the page for ${veg}`);
// });

// turn the server on
app.listen(port, () => {
    console.log(`server running on port ${port}`);
});
