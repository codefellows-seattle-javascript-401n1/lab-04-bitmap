'use strict';

const fs = require('fs');

function header(){
  fs.readFile(__dirname + '/../img/bitmap1.bmp', function(err, data){
    if (err){throw err
    };
    var headspc = data.toString('hex', 0, 14);
    console.log(headspc);
  })
}

header();
