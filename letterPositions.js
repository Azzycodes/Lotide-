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

const letterPositions = function(sentence) {
  const results = {};
  sentence = sentence.replace(/ /g, " ");

  for(let i =0; i < sentence.length; i++ ) {
    if (!results[sentence[i]]) {
      results[sentence[i]] = [];
    }
    results[sentence[i]].push(i);
}
return results;
};

assertArraysEqual(letterPositions("hello").h, [0]);
