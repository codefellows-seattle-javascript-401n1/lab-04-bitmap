'use strict';

const fs = require('fs');

var bufferOut

function reader(){
  fs.readFile(__dirname + '/../img/bitmap1.bmp', function(err, data){
    if (err) throw err;
    bufferFromBitmap = data.toString('hex', 0);
    console.log('data has been read and passed to bufferFromBitmap ');
  })
}

function writer(){
  fs.writeFile(__dirname + '/../img/bitmap-end.bmp', 'bufferToBitmap', 'hex', (err) => {
    if(err) throw err;
    console.log('data has been saved to bitmap-end.bmp');
}
