// https://www.codewars.com/kata/array-deep-count

const deepCount = (arr) => {
  let result = arr.length;
  // eslint-disable-next-line no-restricted-syntax
  for (const item of arr) {
    if (Array.isArray(item)) {
      result += deepCount(item);
    }
  }
  return result;
};

console.log(deepCount([1, 2, 3])); // 3
console.log(deepCount(['x', 'y', ['z']])); // 4
console.log(deepCount([1, 2, [3, 4, [5]]])); // 7
