"use strict";

const http = require('http');
const PORT = process.argv[2];
const server = http.createServer(async (req, res) => {
    const METHOD = req.method;
    if (METHOD == "POST") {
        const buffers = [];
        for await (const chunk of req) {
            buffers.push(chunk);
        }
        const data = Buffer.concat(buffers).toString().toUpperCase();
        res.end(data);
    } else {
        res.end();
    }
});
server.listen(PORT);