const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑 Assertion failed: ${actual} !== ${expected}`);
  }
};

const eqArrays = function (arrayActual, arrayExpected) {
  for (let i = 0; i < arrayActual.length; i++) {
    if (!(arrayActual[i] === arrayExpected[i])) {
      return false;
    }
  }
  return true;
}

/*
assertEqual(eqArrays([1,2,3], [1,2,3]), true);
assertEqual(eqArrays([1,2,3], [1,2,2]), false);
assertEqual(eqArrays([], []), true);
assertEqual(eqArrays([1,2,3], [1,2]), false);
assertEqual(eqArrays([1,2,3], [1,2,'3']), false);
*/