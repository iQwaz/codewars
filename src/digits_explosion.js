// https://www.codewars.com/kata/digits-explosion

const explode = (str) => {
  let newStr = '';
  for (let i = 0; i < str.length; i += 1) {
    for (let j = 0; j < str[i]; j += 1) {
      newStr += str[i];
    };
  }
  return newStr;
}

console.log(explode('312')); // "333122"
console.log(explode('102269')); // "12222666666999999999"
