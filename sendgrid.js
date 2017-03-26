'use strict'

const sg = require('sendgrid');
const helper = sg.mail;



class SendGrid{
  constructor(key){
    this.key = key;
    this.mail = new helper.Mail();
    this.info = new helper.Personalization()
  }

  // adding recipents [email, name] or object [email, name]
  addTo(...recipients){
    const emails = [...recipients]
    emails.forEach(e => {
      if(!Array.isArray(e)) e = [e];
      let email  = new helper.Email(...e);
      this.info.addTo(email);
    });
    return this;
  }

  // add sender [email, name] or email
  addFrom(email){
    if(!Array.isArray(email)) email = [email];
    let e = new helper.Email(...email);
    this.mail.setFrom(e);
    return this;
  }
  // same as addTo
  addCc(...recipients){
    const emails = [...recipients]
    emails.forEach(e => {
      if(!Array.isArray(e)) e = [e];
      let email  = new helper.Email(...e);
      this.info.addCc(email);
    });
    return this;
  }
  // same as addTo
  addBcc(...recipients){
    const emails = [...recipients]
    emails.forEach(e => {
      if(!Array.isArray(e)) e = [e];
      let email  = new helper.Email(...e);
      this.info.addBcc(email);
    });
    return this;
  }

  // add a subject
  addSubject(subject){
    this.mail.setSubject(subject);
    return this;
  }
  
  // add body of email
  addContent(content, type = "text/html"){
    const body = new helper.Content(type, content);
    this.mail.addContent(body);
    return this;
  }

  // add attachment
  // addAttachment(file){
  //   attachment = new helper.Attachment()
  //   attachment.setContent("BwdW")
  //   attachment.setType("image/png")
  //   attachment.setFilename("banner.png")
  //   attachment.setDisposition("inline")
  //   attachment.setContentId("banner")
  //   mail.addAttachment(attachment)
  // }

  process(cb){
    this.mail.addPersonalization(this.info);
    const mailInJSON = this.mail.toJSON();

    const emptyRequest = require('sendgrid-rest').request
    const mailToSend = JSON.parse(JSON.stringify(emptyRequest));
    mailToSend.method = 'POST';
    mailToSend.path = '/v3/mail/send';
    mailToSend.body = mailInJSON;

    const sender = sg(this.key);
    console.log(typeof(cb) === "function", typeof(cb))

    if(typeof(cb) === "function") return sender.API(mailToSend, cb);
    return sender.API(mailToSend);
  }

}

module.exports = (key) => {
  return new SendGrid(key)
}
