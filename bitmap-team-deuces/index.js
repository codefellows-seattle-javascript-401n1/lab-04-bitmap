'use strict';

const fs = require('fs');
const readFile = require(__dirname + '/lib/readwrite').readFile;
const writeFile = require(__dirname + '/lib/readwrite').writeFile;
const parse = require(__dirname + '/lib/parse');
const transform = require(__dirname + '/lib/transform');
var path1 = __dirname + '/../img/bitmap1.bmp';
var path2 = __dirname + '/img/bitmap2.bmp';

function transformBitmap(path1, path2){
  readFile(parse.parse, function(parsedObject){
    transform(parsedObject.colorTable, function(err, newColorTbl){
      parsedObject.colorTable;
      writeFile(path2, parsedObject.toBuffer());
    });
  });
}

transformBitmap(path1, path2);
