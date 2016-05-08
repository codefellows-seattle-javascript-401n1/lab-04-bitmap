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

var randomnum = function(min, max) {
  let rando = Math.floor(Math.random() * (max - min) + min);
  return rando;
};
module.exports.randomcolor = function() {
  let lettersnums = [1,2,3,4,5,6,7,8,9,'a','b','c','d','e','f'];
  let randomhex = [];
  for (var i = 0; i < 6; i++) {
    var random = randomnum(0, 15);
    randomhex += lettersnums[random];
  }
  console.log(`hex: ${randomhex}`);
  return randomhex;
};
