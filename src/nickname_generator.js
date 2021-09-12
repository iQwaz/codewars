// https://www.codewars.com/kata/nickname-generator

const nicknameGenerator = (str) => {
  const vowels = 'aeiou';
  if (str.length < 4) {
    return 'Error: Name too short';
  }
  if (vowels.indexOf(str[2]) === -1) {
    return str.slice(0, 3);
  }
  return str.slice(0, 4);
};

console.log(nicknameGenerator('Kimberly')); // => "Kim"
console.log(nicknameGenerator('Samantha')); // => "Sam"
console.log(nicknameGenerator('Jeannie')); // => "Jean"
console.log(nicknameGenerator('Douglas')); // => "Doug"
console.log(nicknameGenerator('Gregory')); // => "Greg"
console.log(nicknameGenerator('Robert')); // => "Rob"
