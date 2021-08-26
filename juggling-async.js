"use strict";

const http = require('http');
const urls = [process.argv[2], process.argv[3], process.argv[4]];
const buffers = [[], [], []];

http.get(urls[0], res => {
    res.on('data', chunk => {
        buffers[0].push(chunk);
    });
    res.on('error', console.error);
    res.on('end', () => {
        buffers[0] = Buffer.concat(buffers[0]);
        console.log(buffers[0].toString('utf8'));
        http.get(urls[1], res => {
            res.on('data', chunk => {
                buffers[1].push(chunk);
            });
            res.on('error', console.error);
            res.on('end', () => {
                buffers[1] = Buffer.concat(buffers[1]);
                console.log(buffers[1].toString('utf8'));
                http.get(urls[2], res => {
                    res.on('data', chunk => {
                        buffers[2].push(chunk);
                    });
                    res.on('error', console.error);
                    res.on('end', () => {
                        buffers[2] = Buffer.concat(buffers[2]);
                        console.log(buffers[2].toString('utf8'));
                    });
                });
            });
        });
    });
})

// function urlHttpGet(http, index) {
//     let buffer = [];
//     http.get(process.argv[2 + index], res => {
//         res.on('data', chunk => {
//             buffer.push(chunk);
//         });
//         res.on('error', console.error);
//         res.on('end', () => {
//             buffer = Buffer.concat(buffer);
//             console.log(buffer.toString('utf8'));
//             if (2 + index < process.argv.length) {
//                 urlHttpGet(http, ++index);
//             }
//         });
//     });
// }