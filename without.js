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
const without = function(source,itemsToCount) {
  const output = {};
  for (const element of source) {
    if (itemsToCount[element]) {
      if (output[element]) {
        output[element] += 1;
      } else {
        output[element] = 1;
      }
    }
  }
  return output;
};

// Test Cases
const words = ["hello", "world", "lighthouse"];
without(["hello", "world", "lighthouse"], ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);

