'use strict';

// var fs = require('fs');

function Bitmap(){
  this.headerField = '';
  this.fileSize = '';
  this.imgStartOffset = '';
  this.colorTable = '';
  this.pixelArray = [];
}

var firstBitmap = new Bitmap();

exports.parse = function(buffer){
// var buffer = new buffer('length of "data" buffer');
// fs.open('bitmap1.bmp', 'r+', function(err, fd){
//   if(err){
//     return console.error(err);
//   }
 // fs.read(fd, buffer, 0, buffer.length, null, function(err, bytesRead, buffer){
  // fs.readFile(__dirname + '/../img/bitmap1.bmp', function(err, buffer){
  //   if(err) {
  //     console.log(err);
  //   }
  console.log('length of buffer in bytes is: ' + buffer.length);//40 bytes
  firstBitmap.headerField = buffer.slice(0, 2).toString();//BM
  firstBitmap.fileSize = buffer.readIntLE(2, 6);//bytes
  firstBitmap.imgStartOffset =  buffer.slice(10, 14).readUIntLE(0, 4);//byte where img pixel data starts
  firstBitmap.colorTable =  buffer.slice(54, 1071).toString('hex');//buffer
  firstBitmap.pixelArray =  buffer.slice(1071, 11078).toString('hex');//array

  console.log(firstBitmap.headerField);
  console.log(firstBitmap.colorTable);
};

exports.parse();
