'use strict'

const alpha = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numeric = "0123456789";
const mixed = alpha + numeric + "_*-&+%$!";


const randomNumber = (len = 8) => {
  let random = [];
  for(var i=0; i < len; i++){
    random.push(numeric.charAt(Math.floor(Math.random() * numeric.length)));
  }
  return random.join('');;
}
const randomString = (len = 8) => {
  let random = [];
  for(var i=0; i < len; i++){
    random.push(alpha.charAt(Math.floor(Math.random() * alpha.length)));
  }
  return random.join('');
}
const randomAny = (len = 8) => {
  let random = [];
  for(var i=0; i < len; i++){
    random.push(mixed.charAt(Math.floor(Math.random() * mixed.length)));
  }
  return random.join('');
}


module.exports = {
  any: randomAny,
  number: randomNumber,
  string: randomString
};
