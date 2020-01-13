const eqArrays = function(arrayActual, arrayExpected) {
  if (arrayActual.length !== arrayExpected.length) return false;

  for (let i = 0; i < arrayActual.length; i++) {
    if (!(arrayActual[i] === arrayExpected[i])) {
      return false;
    }
  }
  return true;
};

module.exports = eqArrays;