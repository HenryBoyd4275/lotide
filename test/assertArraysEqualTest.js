const assertArrayEqual = require('../assertArraysEqual');

assertArrayEqual([1,2],[1,2]);
assertArrayEqual([1,2],[1,'2']);
assertArrayEqual([1,2],[1]);
assertArrayEqual([],[]);
assertArrayEqual([1,2,3],[1,2]);
assertArrayEqual([1,2,3],[1,3,2]);