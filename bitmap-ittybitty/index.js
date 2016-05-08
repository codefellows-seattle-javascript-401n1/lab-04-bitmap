'use strict';

const fs = require('fs');
const handler = require('./lib/handler');
const app = require('./lib/app');
const transform = require ('/./lib/transformer');

const colorTx = require ('/./lib/transformer');

colorTx(function(err, data){
  if (err) throw err;
  console.log('Ta-Daaaa!')
});

fs.writeFileSync(__dirname + '/../output/' + input + 'newBitmap1.bmp',  bitmap);
