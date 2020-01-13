
const findKeyByValue = function(object, value) {
  for (const key in object) {
    if (object[key] === value) {
      return key;
    }
  }
  return undefined;
};

module.exports = findKeyByValue;

// const bestTVShowsByGenre = {
//   sci_fi: "The Expanse",
//   comedy: "Brooklyn Nine-Nine",
//   drama:  "The Wire"
// };

// assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
// assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
// assertEqual(findKeyByValue(bestTVShowsByGenre, "the wire"), undefined);