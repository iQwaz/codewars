// https://www.codewars.com/kata/jaden-casing-strings

const toJadenCase = (str) => {
  const stringArray = str.split(' ');
  for (let i = 0; i < stringArray.length; i += 1) {
    stringArray[i] = stringArray[i][0].toUpperCase() + stringArray[i].slice(1);
  }
  return stringArray.join(' ');
};

console.log(toJadenCase('How can mirrors be real if our eyes aren\'t real')); // "How Can Mirrors Be Real If Our Eyes Aren't Real"
