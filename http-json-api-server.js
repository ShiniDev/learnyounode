"use strict";

const http = require('http');
const PORT = process.argv[2];
const server = http.createServer((req, res) => {
    console.log(req.headers);
    res.end("Hi");
});
server.listen(PORT);