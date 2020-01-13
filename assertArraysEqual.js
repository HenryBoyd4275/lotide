//Functions

const eqArrays = require('./eqArrays');

const assertArraysEqual = function(actual, expected) {
  eqArrays(actual, expected) ? console.log(`✅ Assertion passed: ${actual} === ${expected}`) : console.log(`🛑 Assertion failed: ${actual} !== ${expected}`);
};

module.exports = assertArraysEqual;