// https://www.codewars.com/kata/disemvowel-trolls

const disemvowel = (str) => {
  const vowels = 'aeiouAEIOU';
  let disemvowelStr = str;
  for (let i = 0; i < vowels.length; i += 1) {
    disemvowelStr = disemvowelStr.split(vowels[i]).join('');
  }
  return disemvowelStr;
};

console.log(disemvowel('This website is for losers LOL!')); // 'Ths wbst s fr lsrs LL!'
