'use strict';

const reader = require('./lib/readbitmap');
const bitobject = require('./lib/parser');
const transform = require('./lib/transform');

reader.bitmapReader('bitmap1.bmp', (err, data) => {
  if (err) throw err;
  // turn the buffer from reading the bitmap into
  // a javascript object
  var bitmapObject = new bitobject.Buffobject(data);
  console.log(bitmapObject);
// transform the color data on the bitmapObject
  transform.randomcolor(bitmapObject);
  console.log(`random color: ${transform.randomcolor(bitmapObject)}`);
  // turn the bitmap object back into a buffer
  var bitmapBuffer = bitmapObject.toBuffer();
  // write the buffer into a new file
  reader.newbitmapfile(bitmapBuffer, (err, data) => {
    if (err) throw err;
    console.log(data);
  });
});
