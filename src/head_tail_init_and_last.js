// https://www.codewars.com/kata/head-tail-init-and-last

const head = (arr) => arr[0];
const tail = (arr) => arr.slice(1);
const init = (arr) => arr.slice(0, arr.length - 1);
const last = (arr) => arr[arr.length - 1];

console.log(head([1, 2, 3, 4, 5])); // => 1
console.log(tail([1, 2, 3, 4, 5])); // => [2,3,4,5]
console.log(init([1, 2, 3, 4, 5])); // => [1,2,3,4]
console.log(last([1, 2, 3, 4, 5])); // => 5
