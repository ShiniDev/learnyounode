"use strict";

const net = require("net");
const PORT = process.argv[2];
const server = net.createServer((socket) => {
    console.log("Client Connected");
    socket.on('end', () => {
        console.log("Client Disconnected");
    })
    // socket.write("Hello Client\n\r");
    // socket.pipe(socket);
    socket.end("Hello Client\n\r");
});

server.on('error', (err) => {
    throw err;
});

server.listen(PORT, () => {
    console.log("Server Bound");
});