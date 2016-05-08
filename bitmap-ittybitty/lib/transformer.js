'use strict';


const fs = require('fs');

function transform(palette) {
  for (let i = 0; i < palette.length ; i++) {
    palette[i] = palette[i] + 2;
    if (palette[i] > 255) {
      palette[i] = 255;
    }
  }
};
exports.transformAdd2 = transform

const randomColor = function randomColor(palette){
  for (let i = 0; i < palette.length ; i++) {
    palette[i] = Math.floor((Math.random()*255));
  }
};
exports.randomColor = randomColor
