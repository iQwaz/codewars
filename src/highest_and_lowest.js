// https://www.codewars.com/kata/highest-and-lowest

const highAndLow = (str) => {
  const arr = str.split(' ');
  const highest = Math.max(...arr);
  const lowest = Math.min(...arr);
  return `${highest} ${lowest}`;
};

console.log(highAndLow('1 2 3 4 5')); // return "5 1"
console.log(highAndLow('1 2 -3 4 5')); // return "5 -3"
console.log(highAndLow('1 9 3 4 -5')); // return "9 -5"
