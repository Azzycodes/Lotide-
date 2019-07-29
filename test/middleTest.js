const assertArraysEqual = require('../assertArraysEqual');
const middle = require('../middle');
const eqArrays = require('../eqArrays');

// Test Code
eqArrays(assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), []), false) // Length of Arrays not equal
eqArrays(assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]), true) // => [3, 4]
