'use strict';

const randomcolor = require('../lib/transform');
// const parse = require('../lib/parser');
const expect = require('chai').expect;



describe('tsting the randomize transform', function() {
  describe('Testing the output of the randomize function', function() {
    it('output a string', function(done) {
      expect(randomcolor.randomcolor()).to.be.a('string');
      done();
    });
  });
});
