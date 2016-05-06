'use strict';

// const transform = require(__dirname + '/transform');
const fs = require('fs');
const bitmap = fs.readFileSync(__dirname +'/../img/bitmap1.bmp');

function allThatData(){
  bitmapData.headField = bitmap.toString('ascii', 0, 2);
  bitmapData.size = bitmap.readUInt32LE(2);
  bitmapData.pixelArrayStart = bitmap.readUInt32LE(10);
  bitmapData.colorPaletteSize = bitmap.readUInt32LE(46);
  bitmapData.onecolor = bitmap.toString('hex',58,62);
  bitmapData.onepixel = bitmap.toString('ascii', 1078, 1079);
  bitmapData.paletteStart = (bitmapData.pixelArrayStart - bitmapData.colorPaletteSize*4);

  console.dir(bitmapData);
}

var bitmapData = {};

allThatData();

var start = bitmapData.paletteStart;
var finish = bitmapData.pixelArrayStart;
