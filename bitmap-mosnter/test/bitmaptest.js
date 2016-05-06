'use strict';

const readwrite = require('../lib/readbitmap');
const parse = require('../lib/parser');
const expect = require('chai').expect;

describe('testing the reading and writing functions', function() {
  describe('testing output of readbitmap.js and newbitmapfile.js', function() {
    it('should return a buffer of hex', function(done) {
      readwrite.bitmapHeader('bitmap1.bmp', function(err, data) {
        expect(err).to.equal(null);
        expect(data.toString('hex', 0, 14)).to.equal('424d462b00000000000036040000');
        done();
      });
    });

  //it('should write data to new file', function(done) {
  //  readwrite.newbitmapfile(buffer, function(err, data) {
  //    expect(err.to.equal(null);
  //    expect())
  //    done();
  //  });
  //});
  });
});

describe('testing the parser', function() {
  describe('testing whether parser is constructing correct info', function() {
    it('should return two parts of the file header', function(done) {
      readwrite.bitmapHeader('bitmap1.bmp', function(err, data) {
        var testobject = new parse.Buffobject(data);
        expect(testobject.bheader).to.equal('BM');
        expect(testobject.colors).to.equal(256);
        done();
      });
    });
  });
});
