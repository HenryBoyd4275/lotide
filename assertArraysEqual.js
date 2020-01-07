//Functions
const eqArrays = function(arrayActual, arrayExpected) {
  for (let i = 0; i < arrayActual.length; i++) {
    if (!(arrayActual[i] === arrayExpected[i])) {
      return false;
    }
  }
  return true;
};

const assertArraysEqual = function(actual, expected) {
  eqArrays(actual, expected) ? console.log(`✅ Assertion passed: ${actual} === ${expected}`) : console.log(`🛑 Assertion failed: ${actual} !== ${expected}`);
};

// assertArrayEqual([1,2],[1,2]);
// assertArrayEqual([1,2],[1,'2']);
// assertArrayEqual([1,2],[1]);
// assertArrayEqual([],[]);
// assertArrayEqual([1,2,3],[1,2]);
// assertArrayEqual([1,2,3],[1,3,2]);