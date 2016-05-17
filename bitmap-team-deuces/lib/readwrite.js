'use strict';

const fs = require('fs');
const parse = require(__dirname + '/parse').parse;

exports.readFile = function(input, callback){
  fs.readFile(input, function(err, data) {
    if (err) throw err;
    let parsedObj = parse(data);
    callback(parsedObj);
  });
};

exports.writeFile = function(output, buffer){
  fs.writeFile(output,buffer,function(err){
    if(err) throw err;
    console.log('created file named', output);
  });
};
