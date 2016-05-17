'use strict';
const fs = require('fs');
const expect = require('chai').expect;
const readwrite = require('../lib/readwrite');

describe('Testing readwrite page', function(){
  describe('Testing writeFile function', function(){
    it('should write a new file called transformed.txt', function(done){
      var testBuffer = new Buffer([1, 2, 3, 4, 5]);
      var path = __dirname + '/../img/transformed.txt';
      readwrite.writeFile(path, testBuffer);
      fs.readFile(path, function(err, data){
        expect(data).to.eql(testBuffer);
        done();
      });
    });
  });
});
