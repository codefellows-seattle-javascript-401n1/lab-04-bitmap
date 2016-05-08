'use strict';

// const Buffer = require('buffer');
const fs = require('fs');
const bitmap = fs.readFileSync(__dirname +'/../img/bitmap1.bmp');

// Write function to grab object, iterate thru object properties
function getBitmapData(imagesObject){
  for (var i in imagesObject){
    if (imagesObject[i] === 'paletteStart'){
      var binaryBMPData = imagesObject[i];
      var int32Array = new Int32Array(binaryBMPData, 55, this.pixelArrayStart - 1);
      int32Array.forEach(function(byte){
        var add2 = byte * 2;
        if (add2 > 255){
          add2 = 255;
        }
        return add2;
      })

    }
  }
}

var buf6 = new Buffer('ff2000');
var view = new Int32Array(buf6);
console.log(view);

// color pallette will be 6bytes long
// increase each RGB value by 2, make sure they don't go over 255

// buffer length - paleltte start
