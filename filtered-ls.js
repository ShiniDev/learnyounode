"use strict";

const fs = require('fs');
const path = require('path');
const dirPath = process.argv[2];
const filter = `.${process.argv[3]}`;
const filterLs = (err, list) => {
    if (err) return console.error(err);
    list.forEach(file => {
        if (path.extname(file) === filter) {
            console.log(file);
        }
    });
};

fs.readdir(dirPath, filterLs);