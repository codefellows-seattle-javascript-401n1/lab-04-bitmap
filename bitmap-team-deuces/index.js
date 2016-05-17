'use strict';

const readFile = require(__dirname + '/lib/readwrite').readFile;
const writeFile = require(__dirname + '/lib/readwrite').writeFile;
const transform = require(__dirname + '/lib/transform');
var input = __dirname + '/img/bitmap1.bmp';
var output = __dirname + '/img/bitmap2.bmp';

function transformBitmap(input, output){
  readFile(input, function(parsedObject){
    transform(parsedObject.colorTable, function(err){
      if(err) {throw err;}
      writeFile(output, parsedObject.toBuffer());
    });
  });
}

transformBitmap(input, output);
