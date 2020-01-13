const assert = require('chai').assert;
const tail = require('../tail');

describe('#tail', () => {
  it ('returns ["lighthouse", "labs"] for ["hello, "lighthouse", "labs"]', () => {
    assert.deepEqual(tail(["Hello", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"]);
  })
  it ('returns undefined for [One]', () => {
    assert.deepEqual(tail([1]), []);
  })
  it ('returns undefined for []', () => {
    assert.deepEqual(tail([]), []);
  })
  it ('returns ["one", 2, "three", 4] for [0,"one",2,"three",4]', () => {
    assert.deepEqual(tail([0,'one',2,'three',4]), ["one", 2, "three", 4])
  });
})