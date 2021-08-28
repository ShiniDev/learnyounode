"use strict";

const http = require('http');
const fs = require('fs');
const PORT = process.argv[2];
const FILE_PATH = process.argv[3];
const server = http.createServer((req, res) => {
    res.writeHead(200, {
        'Content-type': 'text/plain'
    });
    const fileContents = fs.createReadStream(FILE_PATH, 'utf8');
    fileContents.on('readable', () => {
        res.end(fileContents.read());
    })
});

server.listen(PORT);