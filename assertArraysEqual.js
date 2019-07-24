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
