'use strict';

const should = require('should');
const fs = require('fs');
const image = require('../image');
const sampleImage = `${__dirname}/img/sample.JPG`;
const dest = [
  `${__dirname}/img/resized.JPG`,
  `${__dirname}/img/streamed.JPG`
];
const streamDestination = fs.createWriteStream(dest[1]);

describe('Image', () => {
  it('should resize image', () => {
    const img = image(sampleImage);
    console.log(img.identify());
    console.log(sampleImage);
    return img
            .resize(100,100)
            .write(dest[0])
            .should.be.fulfilled();
  })

  it('should resize image using stream', (done) => {
    const img = image(sampleImage);
    console.log(img.identify());
    console.log(sampleImage);
    const streamData = img
                        .resize(200,50)
                        .stream();
    streamData.pipe(streamDestination);
    streamData.on('end', ()=> {
      fs.statSync(dest[1]).should.not.be.empty();
      done();
    });
  })

  after(function() {
      dest.forEach(dest => {
        fs.unlink(dest);
      })
  });
})
