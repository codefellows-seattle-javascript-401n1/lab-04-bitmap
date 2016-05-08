'use strict';

const fs = require('fs');
const bitmap = fs.readFileSync(__dirname +'/../img/bitmap1.bmp');
const AllThatData = module.exports = function (buffer){

  // file header
  this.headField = buffer.toString('utf8', 0, 2);
  this.size = buffer.readUInt32LE(2);
  this.reservedOne = buffer.readUInt16LE(6);
  this.reservedtwo = buffer.readUInt16LE(8);
  this.pixelArrayStart = buffer.readUInt32LE(10);
  // dib header
  this.headerSize = buffer.readUInt32LE(14);
  this.width = buffer.readUInt32LE(18);
  this.height = buffer.readUInt32LE(22);
  this.colorPanes = buffer.readUInt16LE(26);
  this.bitsPerPixel = buffer.readUInt16LE(28);
  this.compressionMethod = buffer.readUInt32LE(30);
  this.imgSize = buffer.readUInt32LE(34);
  this.horizontal = buffer.readUInt32LE(38);
  this.vertical = buffer.readUInt32LE(42);
  this.numColor = buffer.readUInt32LE(46);
  this.numImpColor = buffer.readUInt32LE(48);

  this.paletteStart = (this.pixelArrayStart - this.numColor*4);
  this.palette = bitmap.slice(this.paletteStart, this.pixelArrayStart);
};

const coolImage = new AllThatData(bitmap);
console.log(coolImage.palette);

const transform = function transform(palette) {
  for (let i = 0; i < palette.length ; i++) {
    palette[i] = palette[i] + 2;
  }
  console.log(palette);
};
transform(coolImage.palette);

const randomColor = function randomColor(palette){
  for (let i = 0; i < palette.length ; i++) {
    palette[i] = Math.floor((Math.random()*255));
  }
  console.log(palette);
};
randomColor(coolImage.palette);

const input = process.argv[2];
const palette = bitmap.slice(this.paletteStart, this.pixelArrayStart);

// const flipper = function flipper(palette){
//   for (let i = 0; i < palette.length ; i++) {
//   }
//   console.log(palette);
// };
// flipper(coolImage.palette);

// Should i move <below> to handler.js???
// // var input = process.argv[2];
// // var palette = bitmap.slice(this.paletteStart, this.pixelArrayStart);

if (input == 'transform'){
  transform(bitmap, palette);
} else if (input =='randomColor'){
  randomColor(bitmap, palette);
} else if (input =='flipper'){
  flipper(bitmap, palette);
} else {
  console.log('Please choose your Transformation!');
  // return bitmap;
  // if (null) return cb(null);
}

fs.writeFileSync(__dirname + '/../output/' + input + 'newBitmap1.bmp',  bitmap);
