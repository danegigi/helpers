'use strict'
/**
  Example:
  config:
  {
    target: "...",
    merchant_id: "...",
    user_id: "..."
    pin: "..."
  }
  data:
  { ssl_amount: price,
    ssl_card_number: ssl_card_number,
    ssl_exp_date: ssl_exp_date,
    ssl_first_name:ssl_first_name,
    ssl_last_name:ssl_last_name,
    ssl_cvv2cvc2:ssl_cvv2cvc2
  }

  var elavon = Elavon(config);
  elavon.isRecurring().process(data).then;
  elavon
  .setCC(cc,exp,cvv)i
  .setName(first,last)
  .process().then

  //ssl_billing_cycle
  note:
    ssl_result = 0 (transaction success)

*/

const request = require('koa-request');
const strToJSON = require('../str').strToJSON;

class Elavon {
  constructor(config){
    this.target = config.target;
    this.config = {
      ssl_merchant_id: config.merchant_id,
      ssl_user_id: config.user_id,
      ssl_pin: config.pin,
      ssl_transaction_type: "ccsale",
    };

  }

  isRecurring(bool = false, billingCycle="annually", date = new Date()){
    if(bool){
      this.config.ssl_transaction_type = 'ccaddrecurring';
      this.config.ssl_billing_cycle = billingCycle.toUpperCase();
      let mmddyyyy = `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`;
      this.config.ssl_next_payment_date = mmddyyyy;
    }
    return this;
  }
  
  setAmount(price){
    this.config.ssl_amount = price;
    return this;
  }
  setCc(ccNumber, expiration, cvv){
    this.config.ssl_card_number = ccNumber;
    this.config.ssl_exp_date = expiration;
    this.config.ssl_cvv2cvc2 = cvv;
    return this;
  }
  setName(first, last){
    this.config.ssl_first_name = first;
    this.config.ssl_last_name = last;
    return this;
  } 

  process(jsonData){
    jsonData.ssl_result_format = "ascii";
    jsonData.ssl_show_form = false;
    jsonData.ssl_cvv2cvc2_indicator = 1;
    const toProccess = Object.assign({},this.config, jsonData);

    return new Promise( async (resolve, reject)=>{
      try{
        let respose = await request.post(this.target, {form: toProccess});
        resolve(strToJSON(result.body));
      }catch(e){
        reject(e);
      }
    });
  }
}

module.exports = (config) => {
  return new Elavon(config);
}
