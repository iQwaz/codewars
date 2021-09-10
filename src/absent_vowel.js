const absentVowel = (x) => {
  const vowelStr = 'aeiou';
  const strLowercase = x.toLowerCase();
  for (let i = 0; i < vowelStr.length; i += 1) {
    let isMissing = true;
    for (let j = 0; j < strLowercase.length; j += 1) {
      if (vowelStr[i] === strLowercase[j]) {
        isMissing = false;
      }
    }
    if (isMissing === true) {
      return i;
    }
  }
  return NaN;
};

console.log(absentVowel('John Doe hs seven red pples under his bsket')); // 0
console.log(absentVowel('Bb Smith sent us six neatly arranged range bicycles')); // 3
