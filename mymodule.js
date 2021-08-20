"use strict";

const fs = require('fs');
const { extname } = require('path');

module.exports = (dirName, filter, callback) => {
    filter = `.${filter}`;
    fs.readdir(dirName, (err, data) => {
        if (err) return callback(err);
        data = data.filter(v => extname(v) === filter);
        callback(null, data);
    });
};