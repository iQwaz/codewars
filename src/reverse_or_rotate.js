// https://www.codewars.com/kata/reverse-or-rotate

const revrot = (str, sz) => {
  if ((sz <= 0) || (str.length === 0) || (sz > str.length)) {
    return '';
  }
  let newStr = '';
  for (let i = 0; i < str.length; i += sz) {
    const chunk = str.substring(i, i + sz);
    if (chunk.length >= sz) {
      let sumOfCubes = 0;
      // eslint-disable-next-line no-restricted-syntax
      for (const num of chunk) {
        sumOfCubes += num ** 3;
      }
      let newChunk = '';
      if (sumOfCubes % 2 === 0) {
        newChunk = chunk.split('').reverse().join('');
      } else {
        newChunk = String(chunk.slice(1)) + String(chunk.slice(0, 1));
      }
      newStr += String(newChunk);
    }
  }
  return newStr;
};

console.log(revrot('123456987654', 6)); // "234561876549"
console.log(revrot('123456987653', 6)); // "234561356789"
console.log(revrot('66443875', 4)); // "44668753"
console.log(revrot('66443875', 8)); // "64438756"
console.log(revrot('664438769', 8)); // "67834466"
console.log(revrot('123456779', 8)); // "23456771"
console.log(revrot('', 8)); // ""
console.log(revrot('123456779', 0)); // ""
console.log(revrot('563000655734469485', 4)); // "0365065073456944"
