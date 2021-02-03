'use strict';

const routeResponseMap = {
    '/info': '<h1>Info Page</h1>',
    '/contact': '<h1>Contact Us</h1>',
    '/about': '<h1>Learn More About Us</h1>',
    '/hello': '<h1>Say hello by emailing us here</h1><a href="mailto: fake@notreal.com">fake@notreal.com</a>',
    '/error': '<h1>Sorry, the page you are looking for is not here</h1>'
}

const port = 3000;
const http = require('http');
const httpStatus = require('http-status-codes');
const app = http.createServer();

const getJSONString = obj => {
    return JSON.stringify(obj, null, 2);
}

app.on('request', (req, res) => {//callback

    var body = [];
    req.on('data', (bodyData) => {
        body.push(bodyData);
    });

    req.on('end', () => {
        body = Buffer.concat(body).toString(); // convert the body array to a string, concatenate it
        console.log(`Request Body Contents: ${body}`); //
    })

    // show what we got! (from GET request)
    console.log(getJSONString(req.method));
    console.log(getJSONString(req.url));
    console.log(getJSONString(req.headers));

    res.writeHead(httpStatus.StatusCodes.OK, {
        'Content-Type': 'text/html'
    });

    // use routing map
    if (routeResponseMap[req.url]) { // make sure it exists in the map
        setTimeout(() => res.end(routeResponseMap[req.url]), 2000); //added timeout to mimic a real process/response time
    } else {
        res.end('<h1>Welcome!  this is the default response</h1>')
    }
});

app.listen(port);

console.log(`server is listening on port ${port}`);
