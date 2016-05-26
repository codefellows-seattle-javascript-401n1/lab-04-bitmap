'use strict';
const readWrite = require(__dirname + '/../lib/readbitmap');
const bitObject = require(__dirname + '/../lib/parser');
const transform = require(__dirname + '/../lib/transform');
const expect = require('chai').expect;

describe('testing the reading function from readbitmap.js', function() {
  describe('testing the output of the bitmapReader method', function() {
    it('should return a buffer of hex', function(done) {
      readWrite.bitmapReader(__dirname  + '/../bitmap1.bmp', function(err, data) {
        expect(err).to.equal(null);
        expect(data.toString('hex', 0, 14)).to.equal('424d462b00000000000036040000');
        done();
      });
    });
  });
});

describe('testing the writing function from readbitmap.js', function() {
  describe('testing output of the writeBitmapFile method', function() {
    it('should return a new bmp file', function(done) {
      readWrite.writeBitmapFile(__dirname  + '/../bitmap1.bmp', function(err, data) {
        expect(err).to.equal(null);
        expect(data).to.equal('newImage.bmp'); //fs.readfile to check for directory and delete file
        done();
      });
    });
  });
});

describe('testing module lib/transfrom', function() {
  describe('testing function singTheBlues()', function() {
    it('should fill the colorpallet with blue', function(done){
      readWrite.bitmapReader(__dirname  + '/../bitmap1.bmp', (err, data) => {
        if (err) throw err;
        var bitmapObject = new bitObject.BuffObject(data);
        transform.singTheBlues(bitmapObject);
        expect(err).to.equal(err);
        expect(bitmapObject.colorPalette.toString('utf8')).to.equal('#0000EE#0000EE#0000EE#0000EE#0000EE#0000EE#0000EE#0000EE#0000EE#0000EE#0000EE#0000EE#0000EE#0000EE#0000EE#0000EE#0000EE#0000EE#0000EE#0000EE#0000EE#0000EE#0000EE#0000EE#0000EE#0000EE#0000EE#0000EE#0000EE#0000EE#0000EE#0000EE#0000EE#0000EE#0000EE#0000EE#0000EE#0000EE#0000EE#0000EE#0000EE#0000EE#0000EE#0000EE#0000EE#0000EE#0000EE#0000EE#0000EE#0000EE#0000EE#0000EE#0000EE#0000EE#0000EE#0000EE#0000EE#0000EE#0000EE#0000EE#0000EE#0000EE#0000EE#0000EE#0000EE#0000EE#0000EE#0000EE#0000EE#0000EE#0000EE#0000EE#0000EE#0000EE#0000EE#0000EE#0000EE#0000EE#0000EE#0000EE#0000EE#0000EE#0000EE#0000EE#0000EE#0000EE#0000EE#0000EE#0000EE#0000EE#0000EE#0000EE#0000EE#0000EE#0000EE#0000EE#0000EE#0000EE#0000EE#0000EE#0000EE#0000EE#0000EE#0000EE#0000EE#0000EE#0000EE#0000EE#0000EE#0000EE#0000EE#0000EE#0000EE#0000EE#0000EE#0000EE#0000EE#0000EE#0000EE#0000EE#0000EE#0000EE#0000EE#0000EE#0000EE#0000EE#0000EE#0000EE#0000EE#0000EE#0000EE#0000EE#0000EE#0000EE#0000EE#0000EE#0000EE#0000EE#0000EE#0000EE#0000EE#0000EE#0000EE#0000EE#0000EE#0000EE#0');
        done();
      });
    });
  });
});

describe('testing the parser', function() {
  describe('testing whether parser is constructing correct info', function() {
    it('should return BM from file header', function(done) {
      readWrite.bitmapReader(__dirname  + '/../bitmap1.bmp', function(err, data) {
        var testObject = new bitObject.BuffObject(data);
        expect(testObject.bheader.toString('utf8')).to.equal('BM');
        done();
      });
    });

    it ('should return 11078 as the size', function(done) {
      readWrite.bitmapReader(__dirname  + '/../bitmap1.bmp', function(err, data) {
        var testObject = new bitObject.BuffObject(data);
        expect(testObject.size).to.equal(11078);
        done();
      });
    });

    it ('should return 256 color', function(done) {
      readWrite.bitmapReader(__dirname  + '/../bitmap1.bmp', function(err, data) {
        var testObject = new bitObject.BuffObject(data);
        expect(testObject.colors).to.equal(256);
        done();
      });
    });

    it('should return 256 important colors', function(done) {
      readWrite.bitmapReader(__dirname  + '/../bitmap1.bmp', function(err, data) {
        var testObject = new bitObject.BuffObject(data);
        expect(testObject.importantColors).to.equal(256);
        done();
      });
    });

    it('should return a width of 100', function(done) {
      readWrite.bitmapReader(__dirname  + '/../bitmap1.bmp', function(err, data) {
        var testObject = new bitObject.BuffObject(data);
        expect(testObject.width).to.equal(100);
        done();
      });
    });

    it('should return a height of 100',  function(done) {
      readWrite.bitmapReader(__dirname  + '/../bitmap1.bmp', function(err, data) {
        var testObject = new bitObject.BuffObject(data);
        expect(testObject.height).to.equal(100);
        done();
      });
    });

    it('should return a bits per pixel value of 8', function(done) {
      readWrite.bitmapReader(__dirname  + '/../bitmap1.bmp', function(err, data) {
        var testObject = new bitObject.BuffObject(data);
        expect(testObject.bitsperPixel).to.equal(8);
        done();
      });
    });
  });
});

describe('testing the randomize transform', function() {
  describe('Testing the output of the randomize function', function() {
    it('output a string', function(done) {
      readWrite.bitmapReader(__dirname  + '/../bitmap1.bmp', function(err, data) {
        var testObject = new bitObject.BuffObject(data);
        expect(transform.randomColor(testObject)).to.be.a('string');
        done();
      });
    });
  });
});

describe('testing the randomize transform', function() {
  describe('Testing the output of the randomize function', function() {
    it('should have 6 characters', function(done) {
      readWrite.bitmapReader(__dirname  + '/../bitmap1.bmp', function(err, data) {
        var testObject = new bitObject.BuffObject(data);
        expect(transform.randomColor(testObject)).to.have.length.of(6);
        done();
      });
    });
  });
});
