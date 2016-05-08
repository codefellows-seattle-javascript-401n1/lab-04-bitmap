'use strict';

const fs = require('fs');
const handler = require(__dirname + '/lib/handler');
const app = require(__dirname + '/lib/app');
const transformer = require('./lib/transformer');
const bitmap = fs.readFileSync(__dirname +'/img/bitmap1.bmp');

var bufferOne = handler.reader(bitmap);
var parsedBitmap = new app.AllThatData(bufferOne);
var newBitmap = transformer.getBitmapData(parsedBitmap);
newBitmap.toBuffer();
handler.writer(newBitmap.result);
