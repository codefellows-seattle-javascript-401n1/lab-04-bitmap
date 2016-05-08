'use strict';
const fs = require('fs');

exports.bitmapHeader = function(image, callback) { //function for reading bitmap data
  fs.readFile(image, (err, data) => {
    if (err) {
      console.err;
      callback(err, null);
      return;
    }
    callback(null, data);
  });
};

exports.newbitmapfile = function(buffer, callback) {//takes in a buffer and makes a new one
  fs.writeFile('newimage.bmp', buffer, (err) => {
    if (err) {
      console.err;
      callback(err, null);
      return;
    }
    callback(null, 'newimage.bmp');
  });
};
