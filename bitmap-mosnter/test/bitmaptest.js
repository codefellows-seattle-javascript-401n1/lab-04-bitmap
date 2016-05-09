'use strict';
const readwrite = require(__dirname + '/../lib/readbitmap');
const bitobject = require(__dirname + '/../lib/parser');
const transform = require(__dirname + '/../lib/transform');
const expect = require('chai').expect;

describe('testing the reading and writing functions', function() {
  describe('testing output of readbitmap.js and newbitmapfile.js', function() {
    it('should return a buffer of hex', function(done) {
      readwrite.bitmapReader(__dirname  + '/../bitmap1.bmp', function(err, data) {
        expect(err).to.equal(null);
        expect(data.toString('hex', 0, 14)).to.equal('424d462b00000000000036040000');
        done();
      });
    });
  });
});

describe('testing module lib/transfrom', function() {
  describe('testing function singTheBlues()', function() {
    it('should fill the colorpallet with blue', function(done){
      readwrite.bitmapReader(__dirname  + '/../bitmap1.bmp', (err, data) => {
        if (err) throw err;
        var bitmapObject = new bitobject.Buffobject(data);
        transform.singTheBlues(bitmapObject);
        expect(err).to.equal(err);
        expect(bitmapObject.colorpalette.toString('utf8')).to.equal('#0000EE#0000EE#0000EE#0000EE#0000EE#0000EE#0000EE#0000EE#0000EE#0000EE#0000EE#0000EE#0000EE#0000EE#0000EE#0000EE#0000EE#0000EE#0000EE#0000EE#0000EE#0000EE#0000EE#0000EE#0000EE#0000EE#0000EE#0000EE#0000EE#0000EE#0000EE#0000EE#0000EE#0000EE#0000EE#0000EE#0000EE#0000EE#0000EE#0000EE#0000EE#0000EE#0000EE#0000EE#0000EE#0000EE#0000EE#0000EE#0000EE#0000EE#0000EE#0000EE#0000EE#0000EE#0000EE#0000EE#0000EE#0000EE#0000EE#0000EE#0000EE#0000EE#0000EE#0000EE#0000EE#0000EE#0000EE#0000EE#0000EE#0000EE#0000EE#0000EE#0000EE#0000EE#0000EE#0000EE#0000EE#0000EE#0000EE#0000EE#0000EE#0000EE#0000EE#0000EE#0000EE#0000EE#0000EE#0000EE#0000EE#0000EE#0000EE#0000EE#0000EE#0000EE#0000EE#0000EE#0000EE#0000EE#0000EE#0000EE#0000EE#0000EE#0000EE#0000EE#0000EE#0000EE#0000EE#0000EE#0000EE#0000EE#0000EE#0000EE#0000EE#0000EE#0000EE#0000EE#0000EE#0000EE#0000EE#0000EE#0000EE#0000EE#0000EE#0000EE#0000EE#0000EE#0000EE#0000EE#0000EE#0000EE#0000EE#0000EE#0000EE#0000EE#0000EE#0000EE#0000EE#0000EE#0000EE#0000EE#0000EE#0000EE#0000EE#0000EE#0000EE#0000EE#0');
        done();
      });
    });
  });
});

describe('testing the parser', function() {
  describe('testing whether parser is constructing correct info', function() {
    it('should return BM from file header', function(done) {
      readwrite.bitmapReader(__dirname  + '/../bitmap1.bmp', function(err, data) {
        var testobject = new bitobject.Buffobject(data);
        expect(testobject.bheader.toString('utf8')).to.equal('BM');
        done();
      });
    });

    it ('should return 11078 as the size', function(done) {
      readwrite.bitmapReader(__dirname  + '/../bitmap1.bmp', function(err, data) {
        var testobject = new bitobject.Buffobject(data);
        expect(testobject.size).to.equal(11078);
        done();
      });
    });

    it ('should return 256 color', function(done) {
      readwrite.bitmapReader(__dirname  + '/../bitmap1.bmp', function(err, data) {
        var testobject = new bitobject.Buffobject(data);
        expect(testobject.colors).to.equal(256);
        done();
      });
    });

    it('should return 256 important colors', function(done) {
      readwrite.bitmapReader(__dirname  + '/../bitmap1.bmp', function(err, data) {
        var testobject = new bitobject.Buffobject(data);
        expect(testobject.importantcolors).to.equal(256);
        done();
      });
    });

    it('should return a width of 100', function(done) {
      readwrite.bitmapReader(__dirname  + '/../bitmap1.bmp', function(err, data) {
        var testobject = new bitobject.Buffobject(data);
        expect(testobject.width).to.equal(100);
        done();
      });
    });

    it('should return a height of 100',  function(done) {
      readwrite.bitmapReader(__dirname  + '/../bitmap1.bmp', function(err, data) {
        var testobject = new bitobject.Buffobject(data);
        expect(testobject.height).to.equal(100);
        done();
      });
    });

    it('should return a bits per pixel value of 8', function(done) {
      readwrite.bitmapReader(__dirname  + '/../bitmap1.bmp', function(err, data) {
        var testobject = new bitobject.Buffobject(data);
        expect(testobject.bitsperpixel).to.equal(8);
        done();
      });
    });
  });
});
describe('testing the randomize transform', function() {
  describe('Testing the output of the randomize function', function() {
    it('output a string', function(done) {
      readwrite.bitmapReader(__dirname  + '/../bitmap1.bmp', function(err, data) {
        var testobject = new bitobject.Buffobject(data);
        expect(transform.randomcolor(testobject)).to.be.a('string');
        done();
      });
    });
  });
});

describe('testing the randomize transform', function() {
  describe('Testing the output of the randomize function', function() {
    it('should have 6 characters', function(done) {
      readwrite.bitmapReader(__dirname  + '/../bitmap1.bmp', function(err, data) {
        var testobject = new bitobject.Buffobject(data);
        expect(transform.randomcolor(testobject)).to.have.length.of(6);
        done();
      });
    });
  });
});
