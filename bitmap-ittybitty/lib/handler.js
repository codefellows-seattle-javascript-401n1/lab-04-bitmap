'use strict';

const fs = require('fs');
var buffer = null;

var filePath = __dirname + '/../img/bitmap1.bmp';

function reader(path, cb){
  fs.readFile(path, function(err, data){
    if (err) throw err;
    console.log('data has been read and passed to bufferFromBitmap ');
    return cb ? cb(data.toString('hex', 0)) : data.toString('hex', 0);
  });
}
exports.reader = reader;

reader(filePath, function(data){
  buffer = data;
  console.log(buffer);
});

function writer(){
  fs.writeFile(filePath, 'bufferToBitmap', 'hex', (err) => {
    if(err) throw err;
    console.log('data has been saved to bitmap-end.bmp');
  });
}
exports.writer = writer;
module.exports = exports;
