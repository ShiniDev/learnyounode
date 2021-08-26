"use strict";

const http = require('http');
const url = process.argv[2];

let buffers = [];

http.get(url, response => {
    response.on('data', data => {
        buffers.push(data);
    });
    response.on('end', () => {
        buffers = Buffer.concat(buffers);
        console.log(buffers.toString('utf8').length)
        console.log(buffers.toString('utf8'));
    })
    response.on('error', console.error);
});