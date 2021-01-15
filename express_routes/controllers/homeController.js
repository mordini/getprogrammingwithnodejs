'use strict';

// create a new post route for the home page
exports.post = (req, res) => {
    console.log(`log post: req.body`);
    console.log(req.body);  // log the request's body
    console.log(`log post: req.query`);
    console.log(req.query);
    res.send(`POST successful!`);
};

// adding route to get URL parameters
exports.sendReqParam = (req, res) => {
    let veg = req.params.vegetable;
    res.send(`this is the page for ${veg}, you rebel scum.`);
};

exports.logRequestUrl = (req, res, next) => {
    console.log(`homeController middleware: logRequestUrl()`);
    console.log(`request made to ${req.url}`); // log the request for demo
    next(); //call the next function.  without this, it will hang
};

exports.logRequestQuery = (req, res, next) => {
    console.log(`homeController middleware: logRequestQuery`);
    console.log(req.query); // checking the query (parameters) in the URL (example): http://localhost:3000/?firstname=steve&lastname=reeves
    next(); //call the next function.  without this, it will hang
};