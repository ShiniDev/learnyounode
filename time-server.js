"use strict";

const net = require("net");
const PORT = process.argv[2];
const server = net.createServer((socket) => {
    const date = new Date();
    let cd = [date.getFullYear(), date.getMonth() + 1, date.getDate(), date.getHours(), date.getMinutes()];
    for (let i = 0; i < cd.length; ++i) {
        if (cd[i] < 10) cd[i] = "0" + cd[i];
    }
    socket.end(`${cd[0]}-${cd[1]}-${cd[2]} ${cd[3]}:${cd[4]}\n`);
});
server.listen(PORT);