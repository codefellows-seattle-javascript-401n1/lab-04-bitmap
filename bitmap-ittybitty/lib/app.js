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
  this.palette = buffer.slice(this.paletteStart, this.pixelArrayStart);
  this.pixelArray = buffer.slice(this.pixelArrayStart);
};

AllThatData.prototype.toBuffer = function(){
  const result = new Buffer(this.size);
  result.write(this.headField);
  result.writeInt32LE(this.size, 2);
  result.writeInt16LE(this.reservedOne, 6);
  result.writeInt16LE(this.reservedtwo, 8);
  result.writeInt32LE(this.pixelArrayStart, 10);
  result.writeInt32LE(this.headerSize, 14);
  result.writeInt32LE(this.width, 18);
  result.writeInt32LE(this.height, 22);
  result.writeInt16LE(this.colorPanes, 26);
  result.writeInt16LE(this.bitsPerPixel, 28);
  result.writeInt32LE(this.compressionMethod, 30);
  result.writeInt32LE(this.imgSize, 34);
  result.writeInt32LE(this.horizontal, 38);
  result.writeInt32LE(this.vertical, 42);
  result.writeInt32LE(this.numColor, 46);
  result.writeInt32LE(this.numImpColor, 48);
  this.palette.copy(result, this.paletteStart)
  this.pixelArray.copy(result, this.pixelArrayStart)
  console.log('palette copy check:', this.palette.compare(result.slice(this.paletteStart, this.pixelArrayStart)));
  return result;
};
//
// const coolImage = new AllThatData(bitmap);
// coolImage.toBuffer();
