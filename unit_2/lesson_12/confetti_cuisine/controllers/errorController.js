'use strict';

const httpStatus = require('http-status-codes');

exports.pageNotFoundError = (req, res) => {
    let errorCode = httpStatus.StatusCodes.NOT_FOUND; // set errorCode to 404
    res.status(errorCode); // set the response status
    res.render('error');
};

exports.internalServerError = (error, req, res, next) => {
    let errorCode = httpStatus.StatusCodes.INTERNAL_SERVER_ERROR;
    res.status(errorCode);
    res.send(`${errorCode} | Sorry, we are having trouble.`);
};