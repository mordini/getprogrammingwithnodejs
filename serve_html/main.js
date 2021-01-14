'use strict';

const port = 3000;
const http = require('http');
const httpStatus = require('http-status-codes');
const fs = require('fs'); // file system module

const router = require('./router');
const plainTextContentType = {
    'Content-Type': 'text/plain'
}
const htmlContentType = {
    'Content-Type': 'text/html'
}

const customReadFile = (file, res) => {
    fs.readFile(`./${file}`, (errors, data) => {
        if (errors) {
            console.log(`Error reading the file: ${errors}`);
        }
        res.end(data);
    });
};

// register routes with 'get' and 'post'
router.get('/', (req, res) => {
    res.writeHead(httpStatus.StatusCodes.OK, plainTextContentType);
    res.end('THIS IS A PLAINTEXT INDEX');
});
router.get('/index.html', (req, res) => {
    res.writeHead(httpStatus.StatusCodes.OK, htmlContentType);
    customReadFile('views/index.html', res);
});
router.post('/', (req, res) => {
    res.writeHead(httpStatus.StatusCodes.OK, plainTextContentType);
    res.end('THIS HAS BEEN POSTED');
});

const sendErrorResponse = res => { // Create error-handling function

    res.writeHead(httpStatus.StatusCodes.NOT_FOUND, {
        'Content-Type': 'text/html'
    });
    res.write(`<h1>${res.statusCode}:${res.statusMessage}</br></br>What did you DO!?</h1>`);
    res.end();
};

http.createServer(router.handle).listen(port)

console.log(`the server has started on port: ${port}`);



// OLD CODE BELOW, REMOVE LATER

// // set up route mapping for html files
// // NO LONGER USED due to getViewUrl function interpolation of view request
// const routeMap = {
//     '/': 'views/index.html'
// };

// // interpolate the URL into the filepath (EX. turn '/about' URL into 'views/about.html')
// const getViewUrl = (url) => {
//     console.log(`request url: ${url}`);
//     return `views${url}.html`; // the '/' exists as first character in the url request already
// };


// http
//     .createServer((req, res) => {
//         let url = req.url;  //store the request URL into a variable
//         if (url.indexOf('.html') !== -1) { // check for file extension
//             res.writeHead(httpStatus.StatusCodes.OK, {
//                 'Content-Type': 'text/html'
//             });
//             customReadFile(`./views${url}`, res);
//         } else if (url.indexOf('.js') !== -1) {
//             res.writeHead(httpStatus.StatusCodes.OK, {
//                 'Content-Type': 'text/javascript'
//             });
//             customReadFile(`./public/js${url}`, res);

//         } else if (url.indexOf('.css') !== -1) {
//             res.writeHead(httpStatus.StatusCodes.OK, {
//                 'Content-Type': 'text/css'
//             });
//             customReadFile(`./public/css${url}`, res);

//         } else if (url.indexOf('.png') !== -1) {
//             res.writeHead(httpStatus.StatusCodes.OK, {
//                 'Content-Type': 'image/png'
//             });
//             customReadFile(`./public/images${url}`, res);

//         } else {
//             sendErrorResponse(res);
//         }
//     })
//     .listen(port);

// console.log(`the server has started on port: ${port}`);

// REPLACED IN 6.6, handling and managing routes in main.js
// const customReadFile = (file_path, res) => { // look for a file by the name requested
//     if (fs.existsSync(file_path)) { // check if the file exists
//         fs.readFile(file_path, (error, data) => { // error comes first
//             if (error) {
//                 console.log(error);
//                 sendErrorResponse(res);
//                 return;
//             }
//             res.write(data);
//             res.end();
//         });
//     } else {
//         sendErrorResponse(res);
//     }
// };

/*

// MOVING TO ROUTING MODULE AFTER CREATION
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


*/

