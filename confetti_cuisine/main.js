'use strict';

const port = 3000;
const http = require('http');
const httpStatusCodes = require('http-status-codes');
const router = require('./router');
const contentTypes = require('./contentTypes');
const utils = require('./utils');

// add a series of routes for web pages and assets
router.get('/', (req, res) => { //define the path
    res.writeHead(httpStatusCodes.StatusCodes.OK, contentTypes.html); //send an OK status
    utils.getFile('views/index.html', res); // get the file from module 'utils'
});
router.get('/courses', (req, res) => {
    res.writeHead(httpStatusCodes.StatusCodes.OK, contentTypes.html);
    utils.getFile('views/courses.html', res);
});
router.get('/contact', (req, res) => {
    res.writeHead(httpStatusCodes.StatusCodes.OK, contentTypes.html);
    utils.getFile('views/contact.html', res);
});
router.post('/', (req, res) => {
    res.writeHead(httpStatusCodes.StatusCodes.OK, contentTypes.html);
    utils.getFile('views/thanks.html', res);
});
router.get('/graph.png', (req, res) => {
    res.writeHead(httpStatusCodes.StatusCodes.OK, contentTypes.png);
    utils.getFile('public/images/graph.png', res);
});
router.get('/people.jpg', (req, res) => {
    res.writeHead(httpStatusCodes.StatusCodes.OK, contentTypes.jpg);
    utils.getFile('public/images/people.jpg', res);
});
router.get('/product.jpg', (req, res) => {
    res.writeHead(httpStatusCodes.StatusCodes.OK, contentTypes.jpg);
    utils.getFile('public/images/product.jpg', res);
});
router.get('/confetti_cuisine.css', (req, res) => {
    res.writeHead(httpStatusCodes.StatusCodes.OK, contentTypes.css);
    utils.getFile('public/css/confetti_cuisine.css', res);
});
router.get('/bootstrap.css', (req, res) => {
    res.writeHead(httpStatusCodes.StatusCodes.OK, contentTypes.css)
    utils.getFile('public/css/bootstrap.css', res);
});

http.createServer(router.handle).listen(port);
console.log(`The server is listening on port: ${port}.`);
