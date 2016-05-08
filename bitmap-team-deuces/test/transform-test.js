'use strict';

const expect = require('chai').expect;
const transform = require('../lib/transform');

describe('transform module', () => {
  describe('invert method', () => {
    it('should invert colors', (done) => {
      const colorTable = new Buffer([100, 45, 75, 8, 40, 89, 170, 0]);
      const targetColorTable = new Buffer([155, 210, 180, 247, 215, 166, 85, 255]);
      transform(colorTable, (err, newBuff) => {
        if (err) throw err;
        expect(err).to.eql(null);
        expect(newBuff).to.eql(targetColorTable);
        done();
      });
    });

    it('should throw error if no buffer provided', (done) => {
      transform('string', (err) => {
        expect(err).to.be.an('error');
        done();
      });
    });


  });
});
