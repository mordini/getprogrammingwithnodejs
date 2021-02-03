'use strict';

const port = 3000;
const homeController = require('./controllers/homeController');
const errorController = require('./controllers/errorController');
const express = require('express');
const layouts = require('express-ejs-layouts');
const app = express();

// set the port
app.set('port', process.env.PORT || port);

app.set('view engine', 'ejs'); // which view engine to use
app.use(layouts); // use the layout module

app.use(express.static('public')); // tell app to use express.static to allow individual assets to be served directly

// prepare app to analyze data within incoming requests
app.use(
    express.urlencoded({ // use body-parser for processing URL-encoded parameters
        extended: false
    })
);
app.use(express.json()); // use body-parser for processing JSON parameters

// Route for home page
app.get('/', (req, res) => {
    res.render('index');
});

// add routes for each page and request type
app.get('/courses', homeController.showCourses); // courses page
app.get('/contact', homeController.showSignup); //contact page
app.get('/contact', homeController.postedSignUpForm); //contact form submission

app.use(errorController.pageNotFoundError);
app.use(errorController.internalServerError);

// start the server
app.listen(app.get('port'), () => {
    console.log(`Server running at http://localhost:${app.get('port')}`);
});