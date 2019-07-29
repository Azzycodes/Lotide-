const assertArraysEqual = require('../assertArraysEqual');
const tail = require('../tail');


// TEST CODE
const words = ["Yo Yo", "Lighthouse", "Labs"]; 
assertArraysEqual(tail((words)), ["Lighthouse", "Labs"]);  