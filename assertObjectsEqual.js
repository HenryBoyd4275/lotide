const eqArrays = function(arrayActual, arrayExpected) {
  if (arrayActual.length !== arrayExpected.length) return false;

  for (let i = 0; i < arrayActual.length; i++) {
    if (!(arrayActual[i] === arrayExpected[i])) {
      return false;
    }
  }
  return true;
};

const eqObjects = function(object1, object2) {
  if (Object.keys(object1).length !== Object.keys(object2).length) return false;

  for (const element of Object.keys(object1)) {
    
    if (Array.isArray(object1[element])) {
      console.log("found arrays:",object1[element]," ", object2[element]);
      let arr1 = object1[element];
      let arr2 = object2[element];
      if (!eqArrays(arr1, arr2)) {
        console.log("arrays not equal:", object1[element], " !== ", object2[element]);
        return false;
      }
      console.log("arrays equal:", object1[element], " === ", object2[element]);
    }
    // else if (typeof(object1) === object1[element] && object1[element !== null]){
    // recursion of nested object goes here. something likei: if (!eqObjects(object1[element], object2[element])) return false
    // }
    else if (object1[element] !== object2[element]) {
      return false;
    }
  }

  return true;
};

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  // console.log(`Example label: ${inspect(actual)}`);
  eqObjects(actual, expected) ? console.log(`✅ Assertion passed: ${inspect(actual)} === ${inspect(expected)}`) : console.log(`🛑 Assertion failed: ${inspect(actual)} !== ${inspect(expected)}`);
};