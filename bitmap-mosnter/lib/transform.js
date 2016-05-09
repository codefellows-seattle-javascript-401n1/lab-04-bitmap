//takes js bitmap & manipulate data
'use strict';
var randomnum = function(min, max) {
  let rando = Math.floor(Math.random() * (max - min) + min);
  return rando;
};

exports.singTheBlues = function(bitmap) {
  bitmap.colorpalette.fill('#0000EE'); //fills colorpalette with blue
};

exports.grey = function(object) {
  object.colorpalette.fill(128); //fills colorpalette with grey
};

exports.black = function(object) {
  object.colorpalette.fill(0); //fills colorpalette with black
};

exports.randomcolor = function(bitmap) {
  let lettersnums = [1,2,3,4,5,6,7,8,9,'a','b','c','d','e','f'];
  let randomhex = [];
  for (var i = 0; i < 6; i++) {
    var random = randomnum(0, 15);
    randomhex += lettersnums[random];
  }
  console.log(`hex: ${randomhex}`);
  bitmap.colorpalette.fill(`#${randomhex}`);
  return randomhex;
};

exports.changeColor = function(bitmap) {
  bitmap.colorPallet.fill('great I am making whole new picture ahahahahahaha');
};
