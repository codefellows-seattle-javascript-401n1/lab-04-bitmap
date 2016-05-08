'use strict';

const fs = require('fs');
const parse = require(__dirname + '/parse');

exports.readFile = function(parse, callback){
  fs.readFile(__dirname + '/../img/bitmap1.bmp', function(err, data) {
    let parsedObj = parse(data);
    callback(parsedObj);
  });
};

exports.writeFile = function(path2, buffer){
  fs.writeFile(path2,buffer,function(err){
    if(err) throw err;
    console.log('created file named transformed.bmp');
  });
};
