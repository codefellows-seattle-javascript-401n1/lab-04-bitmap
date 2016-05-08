//takes js bitmap & manipulate data
'use strict';
var halfnum;
module.exports.colortransform = function(colornum) {
  halfnum = colornum / 2;
  console.log('color transform: ' + halfnum);
  return halfnum;
};

module.exports.findcolors = function(pixel) {
  console.log(pixel);
};
