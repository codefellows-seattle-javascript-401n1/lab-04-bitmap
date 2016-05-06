'use strict';

const fs = require('fs');
const head = require('./../lib/handler');
const expect = require('chai').expect;


describe('Testing the bitmap file handler module', function(){
  describe('testing reader function', function(){
    it('should not return an error', function(done){
      head.reader(__dirname + '/../img/bitmap1.bmp', function(data){
        expect(data).to.not.be(null);
        done();
      });
    });
  });
});
