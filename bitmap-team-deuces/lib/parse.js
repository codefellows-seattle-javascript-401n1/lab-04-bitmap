'use strict';

function Bitmap(buffer){
  if (Buffer.isBuffer(buffer)){
    this.originalBuffer = buffer;
    this.headerField = this.originalBuffer.toString('utf8', 0, 2);//BM
    this.fileSize = this.originalBuffer.readUInt32LE(2);//bytes
    this.imgStartOffset =  this.originalBuffer.readUInt32LE(10);
    this.colorTable =  this.originalBuffer.slice(54, this.imgStartOffset);//this.originalBuffer
    this.pixelArray =  buffer.slice(this.imgStartOffset).toString('hex');//array
    return;
  }
  throw new Error('you did not provide a Buffer');
}

Bitmap.prototype.toBuffer =function(){
  return this.originalBuffer;
};

exports.parse = function(buffer){
  let firstBitmap = new Bitmap(buffer);
  return firstBitmap;
};
