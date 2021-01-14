'use strict';

const httpStatusCodes = require('http-status-codes');
const contentTypes = require('./contentTypes');
const utils = require('./utils');

// object to hold route functions
const routes = {
    'GET': {},
    'POST': {}
};

// handle function to, well, handle requests
exports.handle = (req, res) => {
    try {
        routes[req.method][req.url](req, res);
    } catch (e) {
        res.writeHead(httpStatusCodes.StatusCodes.OK, contentTypes.html);
        utils.getFile('views/error.html', res);
    }
};

// get function to map route functions
exports.get = (url, action) => {
    routes['GET'][url] = action;
};

exports.post = (url, action) => {
    routes['POST'][url] = action;
};