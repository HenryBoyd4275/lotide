const assertEqual = require('../assertEqual');
const eqArrays = require('../eqArrays');

assertEqual(eqArrays([1,2,3], [1,2,3]), true);
assertEqual(eqArrays([1,2,3], [1,2,2]), false);
assertEqual(eqArrays([], []), true);
assertEqual(eqArrays([1,2,3], [1,2]), false);
assertEqual(eqArrays([1,2,3], [1,2,'3']), false);