'use strict;'

// require the appropriate modules
const port = 3000;
const http = require('http');
const httpStatus = require('http-status-codes');

// create the server
const app = http.createServer((request, response) => {
    console.log(`Recieved incoming request: ${request}, use console.log(request); to see it in all it's glory!`);
    //console.log(request);

    response.writeHead(httpStatus.OK, {
        "Content-Type": "text/html"
    });  // write the response to the client

    let responseMessage = '<h1>Hello, Universe!</h1>';
    response.write(responseMessage);
    response.end();
    console.log(`Sent response: ${responseMessage}`);
});

//tell the application server to listen on the specified port
app.listen(port);
console.log(`the server has started listening on port: ${port}`);