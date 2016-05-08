'use strict';

const expect = require('chai').expect;
const parse = require('../lib/parse');
const readWriteBitMap = require('../lib/read-write.js');

describe('testing parse.js', () => {
  describe('testing function Bitmap', () => {
    it('should parse to object', (done) => {
      readWriteBitMap.readFile(__dirname + '/../img/bitmap1.bmp', function(err, data) {
        var testP = new parse.firstBitmap(data);
        expect(testP.headerField).to.equal('BM');
        expect(testP.colorTable).to.equal('00000000342022003c284500313966003b568f002671df0066a0d9009ac3ee0036f2fb0050e5990030be6a006e9437002f694b00244b5200393c3200743f3f0082603000e16e5b00ff9b6300e4cd5f00fcdbcb00ffffff00b7ad9b00877e84006a6a6900525659008a4276003232ac006357d900ba7bd7004a978f00306f8a0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000');          done();
        done();
      });

    });
  });
});
