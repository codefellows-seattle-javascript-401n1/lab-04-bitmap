'use strict';

//take buffer create javascript object
module.exports.BuffObject = function(data) {
  this.originalBuffer = data;
  this.bheader = data.toString('utf8', 0, 2);
  this.size = data.readInt32LE(2);
  this.reserved = data.readInt16LE(6);
  this.moreReserved = data.readInt16LE(8);
  this.pixStart = data.readInt32LE(10);
  this.pixEnd = data.length;

  this.colors = data.readInt32LE(46);
  this.importantColors = data.readInt32LE(50);
  this.width = data.readInt32LE(18);
  this.height = data.readInt32LE(22);
  this.colorPlains = data.readIntLE(26);
  this.bitsperPixel = data.readIntLE(28);
  this.compressionObject = data.readInt32LE(30);
  this.horizontalRez = data.readInt32LE(38);
  this.vertrez = data.readInt32LE(42);
  this.colorPalette = data.slice(54, 54 + (this.colors * 4));
};
//make a method to turn object into buffer
module.exports.BuffObject.prototype.toBuffer = function () {
  return this.originalBuffer;
};
