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
// return bitmap;

// const blackNWhite = function blackNWhite(palette){
//   for (let i = 0; i < palette.length ; i++) {
//     palette[i] = 255 - palette[i];
//   }
//   console.log(palette);
// };
// blackNWhite(coolImage.palette);
// return bitmap;

const randomColor = function randomColor(palette){
  for (let i = 0; i < palette.length ; i++) {
    palette[i] = Math.floor((Math.random()*255));
  }
  console.log(palette);
};
randomColor(coolImage.palette);
// return randomColor;

const input = process.argv[2];
const palette = bitmap.slice(this.paletteStart, this.pixelArrayStart);

const flipper = function flipper(palette){
  for (let i = 0; i < palette.length ; i++) {

    // AllThatData.headField = bitmap.toString('utf8', 0, 2);
    // AllThatData.size = bitmap.readUInt32BE(2);
    // AllThatData.reservedOne = bitmap.readUInt16BE(6);
    // AllThatData.reservedtwo = bitmap.readUInt16BE(8);
    AllThatData.pixelArrayStart = bitmap.readUInt32BE(10);
    // dib header
    // AllThatData.headerSize = bitmap.readUInt32BE(14);
    // AllThatData.width = bitmap.readUInt32BE(18);
    // AllThatData.height = bitmap.readUInt32BE(22);
    AllThatData.colorPanes = bitmap.readUInt16BE(26);
    AllThatData.bitsPerPixel = bitmap.readUInt16BE(28);
    // AllThatData.compressionMethod = bitmap.readUInt32BE(30);
    // AllThatData.imgSize = bitmap.readUInt32BE(34);
    // AllThatData.horizontal = bitmap.readUInt32BE(38);
    // AllThatData.vertical = bitmap.readUInt32BE(42);
    AllThatData.numColor = bitmap.readUInt32BE(46);
    AllThatData.numImpColor = bitmap.readUInt32BE(48);

    AllThatData.paletteStart = (AllThatData.pixelArrayStart - AllThatData.numColor*4);
    AllThatData.palette = bitmap.slice(AllThatData.paletteStart, AllThatData.pixelArrayStart);

  }
  console.log(palette);
};
flipper(coolImage.palette);
// return randomColor;

// var input = process.argv[2];
// var palette = bitmap.slice(this.paletteStart, this.pixelArrayStart);

if (input == 'transform'){
  transform(bitmap, palette);
} else if (input =='randomColor'){
  randomColor(bitmap, palette);
} else if (input =='flipper'){
  flipper(bitmap, palette);
} else {
  console.log('Please choose your Transformation!');
  return bitmap;
  // if (null) return cb(null);
}

fs.writeFileSync(__dirname + '/../output/' + input + 'newBitmap1.bmp',  bitmap);
