'use strict';

const bitmapreader = require('./lib/readbitmap');
const bitobject = require('./lib/parser');
const randomcolor = require('./lib/transform');
const fs = require('fs');

//read bitmapfile
bitmapreader.bitmapHeader('bitmap1.bmp', (err, data) => {
  if (err) throw err;
  var newobject = new bitobject.Buffobject(data);
  console.log(newobject);
  console.log(typeof(randomcolor.randomcolor()));
  newobject.colorpalette.fill(`#${randomcolor.randomcolor()}`);
  fs.writeFile('./randomize.bmp', data);
});
