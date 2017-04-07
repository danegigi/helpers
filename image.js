'use strict'
var path = require('path');

var imageMagick = require('gm').subClass({ imageMagick: true });

/**
  Example:
    img.resize(w,h);
    var info = img.identify();
    var result = img.write(dest)
    var result = img.stream(writeStream)
    .....

  *note:
    for more information check
      http://aheckmann.github.io/gm/docs.html
*/

class Image {
  constructor(file_path){
    const img = imageMagick(file_path);
    this.img = img.strip().interlace('Plane');
  }

  toObject(){
    return this.img;
  }

  resize(w,h){
    this.img.resize(w,h);
    return this;
  }

  crop(w,h){
    this.img.crop(w,h);
    return this;
  }

  gravity(loc){
    if(!loc) loc = 'Center';
    this.img.gravity(loc);
    return this;
  }

  quality(qty){
    if(!qty) qty = 90;
    this.img.quality(qty);
    return this;
  }

  /* identify */
  identify(){
    var image = this.img;
    return function(cb){
      image.identify(cb);
    }
  }

  write (dest_path){
    return new Promise((resolve, reject) => {
      this.img.write(dest_path, (err, res) => {
        if(err) reject(err);
        resolve(res);
      })
    });
  }

 buffer(type){
    return new Promise((resolve, reject) => {
      this.img.toBuffer(type,(err, buffer) => {
        if (err) reject(err); 
        resolve(buffer);
      });
    });
  }

  stream (writable_stream, type){
    if(!writable_stream) return this.img.stream(type);
    return new Promise((resolve, reject) => {
      this.img.stream(type, (err, res) => {
        if(err) reject(err);
        resolve(res);
      })
    });
  }

}

module.exports = (fPath) => {
  return new Image(fPath);
}
