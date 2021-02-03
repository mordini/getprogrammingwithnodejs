'use strict';

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
    // show what we got!
    console.log(getJSONString(req.method));
    console.log(getJSONString(req.url));
    console.log(getJSONString(req.headers));

    res.writeHead(httpStatus.StatusCodes.OK, {
        'Content-Type': 'text/html'
    });

    let responseMessage = '<h1>This will show on the screen</h1>';
    // RESPOND WITH HTML
    res.end(responseMessage);

});

app.listen(port);

console.log(`server is listening on port ${port}`);
