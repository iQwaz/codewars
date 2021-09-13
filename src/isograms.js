// https://www.codewars.com/kata/isograms

const isIsogram = (str) => {
  const strLowerCase = str.toLowerCase();
  let result = true;
  for (let i = 0; i < strLowerCase.length; i += 1) {
    if (strLowerCase.indexOf(strLowerCase[i]) !== i) {
      result = false;
    };
  }
  return result;
}

console.log(isIsogram('Dermatoglyphics')); // true
console.log(isIsogram('')); // true
console.log(isIsogram('aba')); // false
console.log(isIsogram('moOse')); // false -- ignore letter case
