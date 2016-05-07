'use strict';

const bitmapreader = require('./lib/readbitmap');
const bitobject = require('./lib/parser');
const transform = require('./lib/transform');

bitmapreader.bitmapHeader('bitmap1.bmp', (err, data) => {
  if (err) throw err;
 // turn the buffer from reading the bitmap into
 // a javascript object
  var bitmapObject = new bitobject.Buffobject(data);
 // transform the color data on the bitmapObject
  transform.singTheBlues(bitmapObject);
 // turn the bitmap object back into a buffer
  var bitmapBuffer = bitmapObject.toBuffer();
 // write the buffer into a new file
  bitmapreader.newbitmapfile(bitmapBuffer, (err, data) => {
    if (err) throw err;
    console.log(data);
  });
});
