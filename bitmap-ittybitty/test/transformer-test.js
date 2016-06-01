'use strict';

const transformer = require('./../lib/transformer');
const expect = require('chai').expect;

describe('Testing transformer module', function(){
  describe('Testing transform function', function(){
    it('should alter a buffer by adding 2 to each byte', function(){
      var buff = new Buffer(8);
      var plusTwoBuff = transformer.transformAdd2(buff);
      expect(buff).to.equal(plusTwoBuff);
    });
  });
});

describe('Testing transformer module', function(){
  describe('Testing randomColor function', function(){
    it('should alter a buffer using randomization', function(){
      var buff = new Buffer(8);
      var randomizedBuff = transformer.randomColor(buff);
      expect(buff).to.equal(randomizedBuff);
    });
  });
});
