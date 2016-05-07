'use strict';

const fs = require('fs');
var buffer = null;

var filePath = __dirname + '/../img/bitmap1.bmp';

function reader(path, cb) {
  fs.readFile(path, function(err, data){
    if (err) return cb('reader error', null);
    cb(null, data.toString('hex', 0));
  });
}
exports.reader = reader;

function writer(endPath, cb){
  fs.writeFile(endPath, 'bufferToBitmap', 'hex', (err) => {
    if(err) return cb('writer error', null);
    return cb(null, 'write complete');
  });
}

exports.writer = writer;
module.exports = exports;
