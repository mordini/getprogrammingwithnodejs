'use strict';

const fs = require('fs');
const httpStatusCodes = require('http-status-codes');
const contentTypes = require('./contentTypes');

// export function to get file, check for errors
module.exports = {
    getFile: (file, res) => {
        fs.readFile(`./${file}`, (error, data) => {
            if (error) {
                res.writeHead(httpStatusCodes.StatusCodes.INTERNAL_SERVER_ERROR, contentTypes.html);
                res.end(`<b>There was an error serving content</b>:</br><i>${error}</i>`);
            }
            res.end(data);
        });
    }
};