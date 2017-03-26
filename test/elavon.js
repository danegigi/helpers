'use strict';

const should = require('should');
const elavon = require('../elavon');

describe('Elavon', () => {
  const config = {
    // ....
  };
  const data = {
    // ....
  }

  it('should return 0', () => {
    const el = elavon(config);
    el.process(data).should.be.fulfilled();
  });
});
