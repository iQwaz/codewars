// https://www.codewars.com/kata/multiples-of-3-or-5

const solution = (number) => {
  if (number <= 0) {
    return 0;
  }
  let sum = 0;
  for (let i = 1; i < number; i += 1) {
    if ((i % 3 === 0) || (i % 5 === 0)) {
      sum += i;
      console.log(i);
    }
  }
  return sum;
};

console.log(solution(10)); // 23
