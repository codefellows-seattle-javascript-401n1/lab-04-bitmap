'use strict';

const fs = require('fs');
const head = require('./../lib/head');
const expect = require('chai').expect;

describe('Testing the bitmap head reader module', function(){
  describe('testing head function', function(){
    it('should return "424d462b00000000000036040000"', function(done){
      fs.readFile(__dirname + '/../img/bitmap1.bmp', function(err, data){
        if (err) throw err;
        var headspc = data.toString('hex', 0, 14);
        expect(headspc).to.equal('424d462b00000000000036040000');
        done();
      });
    });
  });
});
