const assertArraysEqual = function(firstArr, secondArr) {
  if (eqArrays(firstArr, secondArr)) {
    console.log(`✅ ✅ ✅ Assertion Passed: ${firstArr} === ${secondArr}`);
  } else {
    console.log(`🛑 🛑 🛑 Assertion Failed: ${firstArr} !== ${secondArr}`);
  }
};


const eqArrays = function(firstArr, secondArr) {
  if (firstArr.length !== secondArr.length) {
    return false;
  } else { 
    for (let i = 0; i < firstArr.length; i++) {
     if (firstArr[i] !== secondArr[i]) {
       return false;
     } 
   }
   return true;
 }
 };


const flatten = function(input) {
let result = [];
for (let i = 0; i < input.length; i ++) {
  if (Array.isArray(input[i])) {
    for (let e = 0; e < input[i].length; e++) {
      result.push(input[i][e]);
    } 
  } else {
    result.push(input[i]);
  }
}
return result;
};

assertArraysEqual(flatten([7, 9, [4, 1]]), [7, 9, 4, 1]);
