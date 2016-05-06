'use strict';

const fs = require('fs');
const head = require('./../lib/handler');
const expect = require('chai').expect;
var path = __dirname + '/../img/bitmap1.bmp';
var badPath = __dirname + '/../img/bitmak.bmp';
var endPath = __dirname + '/../test/bitmap-end.bmp';

describe('Testing the bitmap file handler module', function(){
  describe('testing reader function', function(){
    it('data should exist and be read as true-ish', function(done){
      head.reader(path, function(err, data){
        expect(data).ok;
        done();
      });
    });
    it('should return an error message because path is bad', function(done){
      head.reader(badPath, function(err, data){
        expect(err).to.equal('reader error');
        expect(data).to.equal(null);
        done();
      });
    });
  });
});

describe('Testing the bitmap file handler module', function(){
  describe('testing writer function', function(){
    it('it should create a file', function(done){
      head.writer(endPath, function(err, data){
        fs.access(endPath, fs.F_OK, (err) => {
          expect(err).not.ok;
          //De
          done();
        });
      });
    });
  });
});
