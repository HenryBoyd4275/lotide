const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑 Assertion failed: ${actual} !== ${expected}`);
  }
};

const eqArrays = function(arrayActual, arrayExpected) {
  if(arrayActual.length !== arrayExpected.length) return false;

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
    
    if (Array.isArray(object1[element])){
      console.log("found arrays:",object1[element]," ", object2[element] );
      let arr1= object1[element];
      let arr2= object2[element];
      if (!eqArrays(arr1, arr2)) {
        console.log("arrays not equal:", object1[element], " !== ", object2[element]);
        return false;
      }
      console.log("arrays equal:", object1[element], " === ", object2[element]);
    } else if (object1[element] !== object2[element]) {
      return false;
    }
  }

  return true;
};


const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
console.log(eqObjects(ab, ba), " should be true"); // => true

const abc = { a: "1", b: "2", c: "3" };
console.log(eqObjects(ab, abc), " should be false"); // => false

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
console.log(eqObjects(cd, dc), " should be true"); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
console.log(eqObjects(cd, cd2), " should be false"); // => false