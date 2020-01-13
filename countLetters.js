
const countLetters = function(string) {
  string = string.split(' ').join('');
  let result = {};
  for (let element of string) {
    if (result[element]) {
      result[element] += 1;
    } else {
      result[element] = 1;
    }
  }
  return result;
};

module.exports = countLetters;

// console.log(countLetters("bagels are good"));
// console.log(countLetters("numb3rs4r3h4rd"));
// console.log(countLetters(""));
// console.log(countLetters(" "));
// console.log(countLetters("aaaaaa"));
// console.log(countLetters("aaaaaaaAAAAAAAA!"));
// console.log(countLetters("@#$%^#$^🛑(&^%*$^*&%#"));