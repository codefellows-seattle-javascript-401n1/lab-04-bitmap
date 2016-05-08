'use strict';

const bitmapreader = require('./lib/readbitmap');
const bitoobject = require('./lib/parser');
const colortransform = require('./lib/transform').colortransform;
const pixeltransform = require('./lib/transform').findcolors;
// read bitmapfile
bitmapreader.bitmapHeader('bitmap1.bmp', (err, data) => {
  var newobject = new bitoobject.Buffobject(data);
  console.log(newobject);
  colortransform(newobject.colors);
  pixeltransform(newobject.size);
});
