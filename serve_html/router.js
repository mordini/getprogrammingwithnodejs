'use strict';

const sendErroResponse = res => { // Create error-handling function

    res.writeHead(httpStatus.StatusCodes.NOT_FOUND, {
        'Content-Type': 'text/html'
    });
    res.write(`<h1>${res.statusCode}:${res.statusMessage}</br></br>What did you DO!?</h1>`);
    res.end();
};

