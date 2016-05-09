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
exports.newbitmapfile = function(buffer, callback) {
  fs.writeFile(__dirname + 'newimage.bmp', buffer, (err) => {
    if (err) {
      console.err;
      callback(err, null);
      return;
    }
    callback(null, 'newimage.bmp');
  });
};
