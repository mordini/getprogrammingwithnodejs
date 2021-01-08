'use strict';

const port = 3000;
const http = require('http');
const httpStatus = require('http-status-codes');
const fs = require('fs'); // file system module

// set up route mapping for html files
// NO LONGER USED DUE TO getViewUrl function interpolation of view request
const routeMap = {
    '/': 'views/index.html'
};

// interpolate the URL into the filepath (EX. turn '/about' URL into 'views/about.html')
const getViewUrl = (url) => {
    console.log(`request url: ${url}`);

    return `views${url}.html`; // the '/' exists as first character in the url request already
};

http
    .createServer((req, res) => {

        let viewUrl = getViewUrl(req.url); // get the file-path string
        console.log(`viewUrl url: ${viewUrl}`);


        fs.readFile(viewUrl, (error, data) => { // interpolate the request URL: into the FS file search
            if (error) {
                res.writeHead(httpStatus.StatusCodes.NOT_FOUND); // ERROR, send a 404 and message
                res.write(`<h1>${res.statusCode}: ${res.statusMessage}</br></br>What did you DO!?</h1>`);
            } else {
                res.writeHead(httpStatus.StatusCodes.OK, {
                    'Content-Type': 'text/html'
                });
                res.write(data);
            }
            console.log(`response is: ${res.statusCode}: ${res.statusMessage}`);
            res.end();
        });

        // OLD WAY OF DOING IT NO FUNCTIONS FOR DYNAMIC OR ERROR CHECKING
        // if (routeMap[req.url]) {               // error is expected FIRST in case there is no data due to an issue with the file
        //     fs.readFile(routeMap[req.url], (error, data) => { // read the contents of the mapped file
        //         res.write(data); // respond with the file contents
        //         res.end();
        //     });
        // } else {
        //     res.end('<h1>Sorry, not found</h1>');
        // }

    })
    .listen(port); // turn the server on

console.log(`the server has started on port: ${port}`);
