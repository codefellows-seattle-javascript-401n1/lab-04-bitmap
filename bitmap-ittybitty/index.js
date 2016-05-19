'use strict';

const handler = require(__dirname + '/lib/handler');
const app = require(__dirname + '/lib/app');
const transformer = require('./lib/transformer');
const bitmap = __dirname +'/img/bitmap1.bmp';

var bufferOne;
var parsedBitmap;
var newBitmap;

handler.reader(bitmap, function(err, data){
  bufferOne = data;
  parsedBitmap = new app(bufferOne);
  newBitmap = parsedBitmap;
  transformer.randomColor(newBitmap.palette);
  const result = newBitmap.toBuffer();
  handler.writer(__dirname +'/img/bitmap-end.bmp', result, console.log());
});
