"use strict";

const myModule = require("./mymodule");
const dirPath = process.argv[2];
const filter = process.argv[3];
const printContents = (err, contents) => {
    if (err) return console.error("Error: ", err);
    contents.forEach(file => {
        console.log(file);
    });
};

myModule(dirPath, filter, printContents);