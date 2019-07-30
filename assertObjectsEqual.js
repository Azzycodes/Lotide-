const assertEqObjectsEqual = function(object1, object2) {
  const inspect = require('util').inspect;
  console.log(`Example label: ${inspect(object2)}`);
  if (assertEqObjectsEqual(object1, object2))  {
    console.log(`✅ ✅ ✅ Assertion Passed: ${object1} === ${object2}`);
  } else {
    console.log(`🛑 🛑 🛑 Assertion Failed: ${object1} !== ${object2}`);
  }
};


const eqObjects = function(object1, object2) {

  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  }
  for (let k in object1) {

    if (!object2[k]) {
      return false;
    }  if (Array.isArray(object1[k]) && Array.isArray(object2[k])) {
      return eqArrays(object1[k], object2[k]);
    }  else if (Array.isArray(object1[k]) || Array.isArray(object2[k])) {
      return false;
    }  else if (typeof(object1[k]) === "object" && typeof(object2[k]) === "object") {
      if (!eqObjects(object1[k], object2[k])) {
        return false;
      }
    }  else if (typeof(object1[k]) === "object" || typeof(object2[k]) === "object") {
      return false;
    }  else if (object1[k] !== object2[k]) {
      return false;
    }
  }
  return true;
};