// Function
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑 Assertion failed: ${actual} !== ${expected}`);
  }
};

const tail = function(array) {
  let result = [];
  for (let i = 1; i < array.length; i++) { //fill our new array with input array, but skip first value by starting at 1 not 0
    result.push((array[i]));
  }
  return result;
};

/*test case: basic

const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result.length, 2); // ensure we get back two elements
assertEqual(result[0], "Lighthouse"); // ensure first element is "Lighthouse"
assertEqual(result[1], "Labs"); // ensure second element is "Labs"

// Test Case: Check the original array
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!

//Test case: array with one element
const test = tail([1]);
assertEqual(test[0],undefined);

//Test case: array with no elements
const test1 = tail([]);
assertEqual(test1[0],undefined);

//Test case: array with mixed element types
const test2 = tail([0,'one',2,'three',4]);
assertEqual(test2[0], 'one');
assertEqual(test2[1], 2);
assertEqual(test2[2], 'three');
assertEqual(test2[3], 4);
*/