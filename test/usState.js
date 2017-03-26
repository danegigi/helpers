'use strict';

const should = require('should');
const usstate = require('../usstates');

describe('US State', function() {
  it('ca is a US state', function() {
      let res = usstate.isUSState("ca");
      console.log(res)
      res.should.be.true();
  });
  it('california is a US state', function() {
      let res = usstate.isUSState("california");
      console.log(res)
      res.should.be.true();
  });
  it('california region is western', function() {
      let res = usstate.getRegion("california");
      console.log(res)
      res.should.be.eql("western");
  });

});
