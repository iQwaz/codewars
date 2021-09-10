// https://www.codewars.com/kata/get-the-middle-character

const getMiddle = (str) => {
  if (str.length % 2 === 0) {
    return str[str.length / 2 - 1] + str[str.length / 2];
  }
  return str[Math.floor(str.length / 2)];
};

console.log(getMiddle('test')); // "es"
console.log(getMiddle('testing')); // "t"
console.log(getMiddle('middle')); // "dd"
console.log(getMiddle('A')); // "A"
