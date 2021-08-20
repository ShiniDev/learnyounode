"use strict";

let sum = 0;

process.argv.map(e => {
    e = Number(e);
    if (!isNaN(e)) {
        sum += e;
    }
});

console.log(sum);