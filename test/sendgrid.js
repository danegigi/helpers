'use strict';

const should = require('should');
const sendgrid = require('../sendgrid');
const KEY = process.env.SG_KEY;
const fromEmail = '';
const toEmail = '';
const bccEmail = '';
const ccEmail = '';

describe('Sendgrid', () => {
  it("should send email and fulfilled", () => {
    const email = sendgrid(KEY);
    return email
      .addFrom(fromEmail)
      .addTo(toEmail)
      .addSubject("Test email")
      .addBcc(bccEmail)
      .addCc(ccEmail)
      .addContent("<h1>Hi!!!!!</h1>")
      .process().should.be.fullfilled();

  });
});
