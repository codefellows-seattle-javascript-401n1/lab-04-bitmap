'use strict';

// const transform = require(__dirname + '/transform');
const fs = require('fs');
const bitmap = fs.readFileSync(__dirname +'/../img/bitmap1.bmp');

function AllThatData(){
  this.headField = bitmap.toString('ascii', 0, 2);
  this.size = bitmap.readUInt32LE(2);
  this.pixelArrayStart = bitmap.readUInt32LE(10);
  this.colorPaletteSize = bitmap.readUInt32LE(46);
  this.onecolor = bitmap.toString('hex',58,62);
  this.onepixel = bitmap.toString('ascii', 1078, 1079);
  this.paletteStart = (this.pixelArrayStart - this.colorPaletteSize*4);

  // console.dir(this);
}

var bitmapData = new AllThatData;
console.log(bitmapData);



var start = bitmapData.paletteStart;
var finish = bitmapData.pixelArrayStart;
