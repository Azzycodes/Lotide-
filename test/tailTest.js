// const assertArraysEqual = require('../assertArraysEqual');
// const tail = require('../tail');


// // TEST CODE
// const words = ["Yo Yo", "Lighthouse", "Labs"]; 
// assertArraysEqual(tail((words)), ["Lighthouse", "Labs"]);  

const assert = require('chai').assert;
const tail = require('../tail');

describe("#tail", () => {
  it("returns 2, 3 for [1, 2, 3]", () => {
    assert.deepEqual(tail([1, 2, 3]), [2, 3]);  
    });
  });
