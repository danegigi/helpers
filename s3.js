'use strict'
/**
  Example:
  let s3 = this.helpers.s3(this.config)

  s3.upload(src, dest).then;

  // return file in the browser
  let file = s3.download(fName).then;
  this.type = path.extname(fName);
  this.body = file;

  let result = yield s3.delete(location)

  // success:
  .statusCode == 200

  *note:
    for more information check
      https://github.com/LearnBoost/knox

*/
const fs = require('fs');
const stream = require('stream');
const knox = require('knox');
const knoxMpu = require('knox-mpu');

/*
 * config = {secret: ..., key: ...., bucket: ....}
 * */
class S3 {
    cosntructor(config){
      this.s3Client = knox.createClient(config);
    }

    upload(src, dest){
      // convert src to readable stream before uploading
      if(!(src instanceof stream.Readable)) src = fs.createReadStream(src);

      let client = this.s3Client;
      return new Promise((resolve, reject) => {
          new knoxMpu({client: client, objectName: dest, stream: src},(err,res) => {
            if(err) reject(err);
            resolve(res);
          });
      });
    }

    // return a readable stream
    download(fName){
      let client = this.s3Client;

      return new Promise((resolve, reject) => {
        client.getFile(fName, (err, res) => {
          if(err) reject(err);
          resolve(res);
        }); 
      });
    }

    delete(fName){
      if(!Array.isArray(fName)) fName = [fName];
      let client = this.s3Client;

      return new Promise((resolve, reject) => {
        client.deleteMultiple(fName, (err, res) => {
          if(err) reject(err);
          resolve(res);
        });
      });
    }

    rename(fName, dest){
      let client = this.s3Client;

      return new Promise((resolve, reject) =>{
        client.copyFile(fName, dest, (err, res) => {
          if(err) reject(err);
          resolve(res);
        });
      })
    }
}

module.exports = (config) => {
  return new S3(config);
}
