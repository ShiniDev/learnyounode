"use strict";

const fs = require('fs');
const { join, extname } = require('path');
const dirPath = process.argv[2];
const filter = `.${process.argv[3]}`;
const traverse = (dir) => {
    fs.readdir(dir, (err, list) => {
        if (err) return console.error(err);
        let subDirectories = [];
        list.forEach(elem => {
            elem = join(dir, elem);
            let isSubdirectory = fs.lstatSync(elem).isDirectory();
            if (isSubdirectory) {
                traverse(elem);
            } else {
                if (extname(elem) === filter) {
                    console.log(elem);
                }
            }
        });
    });
};

traverse(dirPath);