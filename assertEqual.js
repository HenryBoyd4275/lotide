// Function
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log("✅ Assertion passed: " + actual + " === " + expected);
  } else {
    console.log("🛑 Assertion failed: " + actual + " !== " + expected);
  }
};

//Test

assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
assertEqual(5 + 5,10);
assertEqual("Var","Var");
assertEqual("5",5);
