'use strict';

const readWrite = require('./lib/readbitmap');
const bitObject = require('./lib/parser');
const transform = require('./lib/transform');

readWrite.bitmapReader('bitmap1.bmp', (err, data) => {
  if (err) throw err;
  // turn the buffer from reading the bitmap into
  // a javascript object
  var bitmapObject = new bitObject.BuffObject(data);
  console.log(bitmapObject);
// transform the color data on the bitmapObject
  transform.randomColor(bitmapObject);
  // turn the bitmap object back into a buffer
  var bitmapBuffer = bitmapObject.toBuffer();
  // write the buffer into a new file
  readWrite.writeBitmapFile(bitmapBuffer, (err, data) => {
    if (err) throw err;
    console.log(data);
  });
});
