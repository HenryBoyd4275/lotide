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

const flatten = function(array){
  let result = [];
  for (element of array) {
    if (Array.isArray(element)) {
      let temp = flatten(element);
      result = result.concat(temp);
    } else {
      result.push(element);
    }
  }
  console.log("return:",result);
  return result;
};