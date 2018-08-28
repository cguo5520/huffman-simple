const expect = require('chai').expect;
const hs = require('./index');

function simpleTest(inputStr){
  const arr = [...inputStr].map(char=>char.charCodeAt(0));
  const encoded = hs.encode(arr);
  const decoded = hs.decode(encoded);
  const outputStr = String.fromCharCode(...decoded);
  it(inputStr, function(){
    expect(inputStr).to.equal(outputStr);
  });
}

describe('huffman-simple encoding/decoding works for strings: ', function() {
  ['arsdqfd qda','arstarstarst','fqwd;yvcasr'].forEach(str=>{
    simpleTest(str);
  })
});
