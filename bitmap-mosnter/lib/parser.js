'use strict';

//take buffer create javascript object
module.exports.Buffobject = function(data) {
  // file header
  this.bheader = data.toString('utf8', 0, 2);
  this.size = data.readInt32LE(2);
  this.reserved = data.readInt16LE(6);
  this.moreReserved = data.readInt16LE(8);
  this.pixStart = data.readInt32LE(10);
  // dib header
  this.pixEnd = data.length;
  this.colors = data.readIntLE(46);
  this.importantcolors = data.readIntLE(50);
  this.width = data.readIntLE(18);
  this.height = data.readIntLE(22);
  this.colorplains = data.readIntLE(26);
  this.bitsperpixel = data.readIntLE(28);
  this.compressionobject = data.readIntLE(30);
  this.horizontalrez = data.readIntLE(38);
  this.vertrez = data.readIntLE(42);
};
//make a method to turn object into buffer
module.exports.Buffobject.prototype.toBuffer = function () {
  var result = new Buffer(this.size);
  return result;
};
