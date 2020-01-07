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

const doesArrayContain = function(array, value) {
  for (let element of array) {
    if (element === value) {
      return true;
    }
  }
  return false;
};

const without = function(source, itemsToRemove) {
  let result = [];
  for (let sourceElement of source) {
    if (!(doesArrayContain(itemsToRemove, sourceElement))) {
      result.push(sourceElement);
    }
  }
  return result;
};

assertArraysEqual(without([1,2,3,4,5,6],[4,5,6]), [1,2,3]);
assertArraysEqual(without([1,2,3],[4,5,6]), [1,2,3]);
assertArraysEqual(without([1,2,3],["1","2","3"]), [1,2,3]);
assertArraysEqual(without([1,2,3],[]), [1,2,3]);
assertArraysEqual(without([1,2,3],[1,2,3]), []);
assertArraysEqual(without(["1",'2','3'],[1,2,'3']), ['1','2']);
const words = ["hello", "world", "lighthouse"];
without(["hello", "world", "lighthouse"], ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);
