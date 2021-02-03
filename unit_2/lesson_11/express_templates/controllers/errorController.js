'use strict';

const httpStatus = require('http-status-codes');

exports.respondNoResourceFound = (req, res) => {
    console.log(`respond to no resource error`);
    let errorCode = httpStatus.StatusCodes.NOT_FOUND; // respond with 404
    console.log(errorCode);
    res.status(errorCode);

    //res.send(`${errorCode} | The Page does not exist!`);

    // Send custom file instead of plain-text message
    // NOTE: STATIC files such as HTML files do NOT go through a templating engine
    // as they do not have any ESJ values
    res.sendFile(`./public/${errorCode}.html`, {
        root: './'
    });
};

// catch ALL errors and respond with a 500 status code
exports.respondInternalError = (error, req, res, next) => {
    console.log(`respond to internal error`);

    let errorCode = httpStatus.StatusCodes.INTERNAL_SERVER_ERROR;
    console.log(`ERROR occurred: ${error.stack}`);
    res.status(errorCode);
    // res.send(`${errorCode} | Sorry, our application is experiencing a problem!`);
    res.sendFile(`./public/${errorCode}.html`, {
        root: './'
    });
};

/*
error logging function, as usual, error comes first, next last
without all four of thesee, it would not be interpreted as error handling middleware
but as a normal middleware function
*/
exports.logErrors = (error, req, res, next) => {
    console.log(`LOGGING ERRORS`);
    console.error(error.stack); // log the error stack
    next(error); // pass the error to the next middleware function
};