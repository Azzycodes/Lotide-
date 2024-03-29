// const assertArraysEqual = require('../assertArraysEqual');
// const middle = require('../middle');
// const eqArrays = require('../eqArrays');

// // Test Code
// eqArrays(assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), []), false) // Length of Arrays not equal
// eqArrays(assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]), true) // => [3, 4]

const assert = require('chai').assert;
const middle   = require('../middle');

describe("#middle", () => {
  it("returns 2 for [1, 2, 3]", () => {
    assert.deepEqual(middle([1, 2, 3]), [2]);
  });
});