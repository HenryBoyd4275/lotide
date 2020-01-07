const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑 Assertion failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function(string) {
  string = string.split(' ').join('');
  let result = {}
  for (let element of string){
    if (result[element]){
      result[element] += 1;
    } else {
      result[element] = 1;
    }
  }
  return result;
}

console.log(countLetters("bagels are good")); 
console.log(countLetters("numb3rs4r3h4rd")); 
console.log(countLetters("")); 
console.log(countLetters(" ")); 
console.log(countLetters("aaaaaa")); 
console.log(countLetters("aaaaaaaAAAAAAAA!")); 