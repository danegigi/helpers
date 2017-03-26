'use strict';

// convert string perline to json object
const strToJSON = (str) => {
  const strPerLine = str.trim().split("\n");
  const jsonObj = {};
  strPerLine.forEach((v) => {
    let tmp = v.split("=");
    jsonObj[tmp[0]] = tmp[1];
  });
  return jsonObj;
}

module.exports = {
  strToJSON: strToJSON,
}
