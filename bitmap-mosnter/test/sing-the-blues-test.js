'use strict';
const transform = require(__dirname + '/../lib/transform');
const bitmapreader = require(__dirname + '/../lib/readbitmap');
const bitobject = require(__dirname + '/../lib/parser');
const expect = require('chai').expect;

describe('testing module lib/transfrom', function() {
  describe('testing function singTheBlues()', function() {
    it('should fill the colorpallet with blue', function(done){
      bitmapreader.bitmapHeader(__dirname  + '/../bitmap1.bmp', (err, data) => {
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
