'use strict';

const should = require('should');
const random = require('../random');

describe('Random', function() {
  it('should return random string', function() {
    let rand = random.string(1);
    rand.should.match(/[a-zA-Z]/);
    (rand.length).should.eql(1);
    
  });
  it('should return random number', function() {
    let rand = random.number(10);
    rand.should.match(/[0-9]/);
    (rand.length).should.eql(10);
  });
  it('should return any random', function() {
    let rand = random.any(20);
    rand.should.match(/\w/);
    (rand.length).should.eql(20);
  });

});
