'use strict';

require('should');
const str = require('../str');

describe('STR', () => {
  const tmpStr = "name=MyName\nage=30";
  it('should return json object', () => {
    const result = str.strToJSON(tmpStr);
    result.should.have.a.key('name');
    result.should.not.have.a.key('gender');
  });
})
