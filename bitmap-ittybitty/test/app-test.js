'use strict';

const fs = require('fs');
const app = require('./../lib/app');
const expect = require('chai').expect;
const bitmap = fs.readFileSync(__dirname +'/../img/bitmap1.bmp');
var test = new app(bitmap);

describe('Testing the app module that will parse a buffer', function(){
  describe('testing the AllThatData constructor', function(){
    it('should be an head field of "42 4d"', function(){
      expect(test.headField).to.equal('BM');
      console.log(test);
    });
    it('should be an object with a headerSize propery that equals 14', function(){
      expect(test.headerSize).to.equal(40);
    });
    it('should be an object with a pixelArrayStart prpoperty', function(){
      expect(test).to.have.property('pixelArrayStart');
    });
    it('should be an object with a size prpoperty', function(){
      expect(test).to.have.property('size');
    });
    it('should be an object with a paletteStart prpoperty', function(){
      expect(test).to.have.property('paletteStart');
    });
  });
});
