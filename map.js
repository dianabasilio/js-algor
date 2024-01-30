const numbers = [1, 5, 10, 15];
const doubles = numbers.map(function (x) {
  return x * 2;
});
// doubles is now [2, 10, 20, 30]
// numbers is still [1, 5, 10, 15]

const numbers2 = [1, 4, 9];
const roots = numbers2.map(function (num) {
  return Math.sqrt(num);
});
// roots is now [1, 2, 3]
// numbers is still [1, 4, 9]

const numbers3 = [10, 20, 30, 40];

const minus2 = numbers3.map((num) => {
  return num - 2;
});
console.log(minus2);
//[ 8, 18, 28, 38 ]
