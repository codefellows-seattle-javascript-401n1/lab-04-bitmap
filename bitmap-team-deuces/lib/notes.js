'use strict';


const fs = require('fs');
// const read = require('./lib/read-write');

fs.readFile(__dirname + '/../img/bitmap1.bmp', function(err, data) {

  console.log('header field: ', data.readIntLE(0));
  console.log('the size of BMP file ',data.readIntLE(2));
  console.log('Reserved ',data.readIntLE(6));
  console.log('Reserved ',data.readIntLE(8));
  console.log('starting point of bitmap ',data.readIntLE(10));
  console.log('size of this header ',data.readIntLE(14));
  console.log('bitmap width in pixels',data.readIntLE(18));
  console.log('bitmap height in pixels ',data.readIntLE(22));
  console.log('number of color planes ',data.readIntLE(26));
  console.log('bits per pixel',data.readIntLE(28));
  console.log('compression method',data.readIntLE(30));
  console.log('image size ', data.readIntLE(34));
  console.log('horizont rez ',data.readIntLE(38));
  console.log('vert rez ', data.readIntLE(42));
  console.log('number of colors ',data.readIntLE(46));
  console.log('number of important colors ', data.readIntLE(50));
  console.log(data.readIntLE(54));
  console.log(data.readIntLE(58));
  console.log(data.readIntLE(62));
  console.log(data.readIntLE(66));
  console.log(data.readIntLE(70));
  console.log(data.readIntLE(74));
  console.log(data.readIntLE(78));
  console.log(data.readIntLE(82));
  console.log(data.readIntLE(86));
  // console.log(data.readIntLE(55));
  // console.log(data.readIntLE(55));
  // console.log(data.readIntLE(55));
  // console.log(data.readIntLE(55));
  // console.log(data.readIntLE(55));
  // console.log(data.readIntLE(55));
  // console.log(data.readIntLE(55));
  // console.log(data.readIntLE(55));
  // console.log(data.readIntLE(55));
  // console.log(data.readIntLE(55));
  // console.log(data.readIntLE(55));







});
