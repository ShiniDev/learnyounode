"use strict";

const fs = require('fs');
const filePath = process.argv[2];
const countNewLines = (err, fileContents) => {
    if (err) return console.error(err);
    const lines = fileContents.split('\n').length - 1;
    console.log(lines);
};

fs.readFile(filePath, 'utf8', countNewLines);