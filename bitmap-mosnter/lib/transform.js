//takes js bitmap & manipulate data
'use strict';
var randomNum = function(min, max) {
  let rando = Math.floor(Math.random() * (max - min) + min);
  return rando;
};

exports.singTheBlues = function(object) {
  object.colorPalette.fill('#0000EE'); //fills colorpalette with blue
};

exports.grey = function(object) {
  object.colorPalette.fill(128); //fills colorpalette with grey
};

exports.black = function(object) {
  object.colorPalette.fill(0); //fills colorpalette with black
};

exports.randomColor = function(object) {
  let lettersNums = [1,2,3,4,5,6,7,8,9,'a','b','c','d','e','f'];
  let randomHex = [];
  for (var i = 0; i < 6; i++) {
    var random = randomNum(0, 15);
    randomHex += lettersNums[random];
  }
  console.log(`hex: ${randomHex}`);
  object.colorPalette.fill(`#${randomHex}`);
  return randomHex;
};

exports.changeColor = function(bitmap) {
  bitmap.colorPallet.fill('great I am making whole new picture ahahahahahaha');
};
