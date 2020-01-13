// Function

const tail = function(array) {
  let result = [];
  for (let i = 1; i < array.length; i++) { //fill our new array with input array, but skip first value by starting at 1 not 0
    result.push((array[i]));
  }
  return result;
};

module.exports = tail;