const eqArrays = function(arrayActual, arrayExpected) {
  for (let i = 0; i < arrayActual.length; i++) {
    if (!(arrayActual[i] === arrayExpected[i])) {
      return false;
    }
  }
  return true;
};

const assertArrayEqual = function(actual, expected) {
  eqArrays(actual, expected) ? console.log(`✅ Assertion passed: ${actual} === ${expected}`) : console.log(`🛑 Assertion failed: ${actual} !== ${expected}`);
};

const middle = function(array) {
  if (array.length < 3) return [];
  if (!(array.length % 2)) {
    return [array[Math.floor(array.length / 2) - 1],array[Math.floor(array.length / 2)]];
  } else {
    return [array[Math.floor(array.length / 2)]];
  }
};

// console.log(middle([1,2,3,4,5,6]));
// console.log(middle([1,2,3,4,5]));
// console.log(middle([]));
// console.log(middle([1,2]));
// console.log(middle([1]));