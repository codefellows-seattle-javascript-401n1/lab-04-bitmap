'use strict';

const randomcolor = require('../lib/transform');
const expect = require('chai').expect;



describe('tsting the randomize transform', function() {
  describe('Testing the output of the randomize function', function() {
    it('output a string', function(done) {
      expect(randomcolor.randomcolor()).to.be.a('string');
      done();
    });
  });
});
describe('tsting the randomize transform', function() {
  describe('Testing the output of the randomize function', function() {
    it('should have 6 characters', function(done) {
      expect(randomcolor.randomcolor()).to.have.length.of(6);
      done();
    });
  });
});
