'use strict';

const numberToComma = (money, decimal = 0) => {
  let parts= parseFloat(money).toFixed(decimal).split(".");
  let converted = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",") + (parts[1]? "." + parts[1] : "");
  return converted; 
}

const numberToMoney = (money, currencySym = "$") => {
  let converted = numberToComma(money,2);
  return `${currencySym}${converted}`
}

const commaToNumber = (currency) => {
  var value = currency || this.value;
  var converted = Number(value.replace(/[^0-9\.]+/g,""));
  return converted;
}

module.exports = {
  commaToNumber: commaToNumber,
  numberToMoney: numberToMoney,
  numberToComma: numberToComma
}

