'use strict';

function Bitmap(buffer){
  console.log('is buffer?', Buffer.isBuffer(buffer));
  this.originalBuffer = buffer;
  this.headerField = this.originalBuffer.slice(0, 2).toString();//BM
  this.fileSize = this.originalBuffer.readUInt32LE(2);//bytes
  this.imgStartOffset =  this.originalBuffer.slice(10, 14).readUIntLE(0, 4);
  this.colorTable =  this.originalBuffer.slice(54, 1071);//this.originalBuffer
  this.pixelArray =  buffer.slice(1071, 11078).toString('hex');//array
}

Bitmap.prototype.toBuffer =function(){
  return this.originalBuffer;
};


exports.parse = function(buffer){
  let firstBitmap = new Bitmap(buffer);
  return firstBitmap;
};
