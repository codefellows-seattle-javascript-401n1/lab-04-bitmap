'use strict';
//const fs = require('fs');

//take buffer create javascript object
module.exports.Buffobject = function(data) {
  this.originalBuffer = data;
  this.bheader = data.toString('utf8', 0, 2);
  this.size = data.readInt32LE(2);
  this.reserved = data.readInt16LE(6);
  this.moreReserved = data.readInt16LE(8);
  this.pixEnd = data.length;

  this.colors = data.readInt32LE(46);
  this.importantcolors = data.readInt32LE(50);
  this.width = data.readInt32LE(18);
  this.height = data.readInt32LE(22);
  this.colorplains = data.readIntLE(26);
  this.bitsperpixel = data.readIntLE(28);
  this.compressionobject = data.readInt32LE(30);
  this.horizontalrez = data.readInt32LE(38);
  this.vertrez = data.readInt32LE(42);
  this.colorpalette = data.slice(54, (54 + (this.colors * 4)));
  this.pixelarray = data.slice(64 + (this.colors * 4), 11070);
};
//make a method to turn object into buffer
module.exports.Buffobject.prototype.toBuffer = function () {
  return this.originalBuffer;
};
