const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ ✅ ✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑 🛑 🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const eqArrays = function(firstArr, secondArr) {
    for (let i = 0; i < firstArr.length; i++) {
     if (firstArr[i] !== secondArr[i]) 
       return false;
    }
   return true;
 };


let findKey = function(object, callback) {

  for (let key in object) {
    if (callback(object)[key]) {
      return key;
    }
  }
  return undefined;
};