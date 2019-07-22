const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ ✅ ✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑 🛑 🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const head = function (firstElement) {
  return firstElement[0];
};
// TEST CODE
assertEqual(head([25,1,764]), 25);
assertEqual(head(["Came", "Saw", "conquered"]), "Saw");
