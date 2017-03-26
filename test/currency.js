'use strict';

const should = require('should');

const currency = require('../currency');

describe('Currency', function() {
  describe('.numberToComma', function() {
    it('1000 should be 1,000.00', function() {
      let converted = currency.numberToComma(1000,2);
      converted.should.be.equal('1,000.00');
    });
    it('100 should be 100', function() {
      let converted = currency.numberToComma(100);
      converted.should.be.equal('100');
    });
    it('1000 should be 1,000', function() {
      let converted = currency.numberToComma(1000);
      converted.should.be.equal('1,000');
    });
  });

  describe('.numberToMoney', function() {
    it('1000 should be P1,000.00', function() {
      let converted = currency.numberToMoney(1000,"P");
      converted.should.be.equal('P1,000.00');
    });
    it('100 should be Y100', function() {
      let converted = currency.numberToMoney(100, "Y");
      converted.should.be.equal('Y100.00');
    });
    it('1000 should be $1,000', function() {
      let converted = currency.numberToMoney(1000);
      converted.should.be.equal('$1,000.00');
    });
  });

  describe('.commaToNumber', function() {
    it('1,000 should be 1000', function() {
      let converted = currency.commaToNumber("1,000");
      converted.should.be.equal(1000);
    });
    it('10,000.00 should be 10000', function() {
      let converted = currency.commaToNumber("10,000.50");
      converted.should.be.equal(10000.5);
    });
    it('$1,000 should be 1000', function() {
      let converted = currency.commaToNumber("$1,000");
      converted.should.be.equal(1000);
    });
  });
});
