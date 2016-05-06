'use strict';

const fs = require('fs');

var testString = '';
var parsedString = {};

function reader(){
  fs.readFile(__dirname + '/../img/bitmap1.bmp', function(err, data){
    if (err) throw err;
    var testString = data.toString('hex', 0);
    console.log('data has been read and passed to testString');
    parser(testString);

  });
}

function parser(data){
  parsedString.array = data.match(/.{2}/g);
  console.log(parsedString.array.slice(1, 22));
}

reader(testString);
