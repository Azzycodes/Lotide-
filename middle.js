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

 const assertArraysEqual = function(firstArr, secondArr) {
  if (eqArrays(firstArr, secondArr)) {
    console.log(`✅ ✅ ✅ Assertion Passed: ${firstArr} === ${secondArr}`);
  } else {
    console.log(`🛑 🛑 🛑 Assertion Failed: ${firstArr} !== ${secondArr}`);
  }
};


const middle = function(array) {
 if (array.length < 3) {
   return [];
 } else if (array.length % 2 === 0) {
   return array.slice(array.length / 2 -1, array.length / 2 + 1)
 } else {
    let newArray = [];
    let middleNum = Math.round(array.length /2)
    newArray.push(array[middleNum -1]);
    return newArray;
 }
};

console.log((middle([1, 2, 3, 4, 5, 6]))) // => [3, 4]
