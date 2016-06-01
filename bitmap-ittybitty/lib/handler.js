'use strict';

const fs = require('fs');


function reader(path, cb) {
  fs.readFile(path, function(err, data){
    if (err) return cb && cb('reader error', null);
    cb && cb(null, data);
  });
}
exports.reader = reader;

function writer(endPath, data, cb){
  fs.writeFile(endPath, data, 'hex', (err) => {
    if(err) return cb('writer error', null);
    cb && cb(null, 'write complete');
  });
}

exports.writer = writer;
module.exports = exports;
