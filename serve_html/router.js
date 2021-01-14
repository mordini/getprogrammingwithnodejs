'use strict';

const httpStatus = require('http-status-codes');
const htmlContentType = {
    'Content-Type': 'text/html'
}
const routes = { //define a routes object to store routes mapped to POST and GET requests
    'GET': {
        '/info': (req, res) => {
            res.writeHead(httpStatus.StatusCodes.OK, {
                'Content-Type': 'text/plain'
            })
            res.end('Welcome to the Info Page!')
        }
    },
    'POST': {}
};

// use the exports object to give other files access to the functionality
exports.handle = (req, res) => { //Create a function called 'handle' to process route callback functions

    try {
        if (routes[req.method][req.url]) {
            routes[req.method][req.url](req, res);
        } else {
            res.writeHead(httpStatus.StatusCodes.NOT_FOUND, htmlContentType);
            res.end('<h1> NO such file exists</h1>');
        }
    } catch (ex) {
        console.log(`error: ${ex}`);
    }
};

// Build 'get' and 'post' functions to register routes from main.js
// more methods will go in here later
exports.get = (url, action) => {
    routes['GET'][url] = action;
};
exports.post = (url, action) => {
    routes['POST'][url] = action;
};