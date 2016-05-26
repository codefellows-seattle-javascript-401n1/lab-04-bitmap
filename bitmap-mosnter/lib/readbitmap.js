'use strict';
const fs = require('fs');

exports.bitmapReader = function(image, callback) {
  fs.readFile(image, (err, data) => {
    if (err) {
      console.err;
      callback(err, null);
      return;
    }
    callback(null, data);
  });
};

//create a write module
exports.writeBitmapFile = function(buffer, callback) {
  fs.writeFile(__dirname + 'newImage.bmp', buffer, (err) => {
    if (err) {
      console.err;
      callback(err, null);
      return;
    }
    callback(null, 'newImage.bmp');
  });
};
