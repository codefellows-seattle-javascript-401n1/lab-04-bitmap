'use strict';

const fs = require('fs');

exports.readFile = function(){
  fs.readFile(__dirname + '/../img/bitmap1.bmp', function(err, data) {
    console.log(data);
  });
};


exports.writeFile = function(buffer){
  fs.writeFile(__dirname + '/../img/transformed.bmp',buffer,function(err){
    if(err) throw err;
    console.log('created file named transformed.bmp');
  });
};
