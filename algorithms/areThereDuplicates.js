// Implement a function called, areThereDuplicates which accepts a variable number of arguments, and checks whether there are any duplicates among the arguments passed in.  You can solve this using the frequency counter pattern OR the multiple pointers pattern.
// Examples:
// areThereDuplicates(1, 2, 3) // false
// areThereDuplicates(1, 2, 2) // true
// areThereDuplicates('a', 'b', 'c', 'a') // true

//Resolved with multiple pointers:

const areThereDuplicates = (...args) => {
  //Para ordenar de menor a mayor
  args.sort((a, b) => {
    return a - b;
  });

  let start = 0;
  let next = 1;
  while (next < args.length) {
    if (args[start] === args[next]) {
      return true;
    }
    start++;
    next++;
  }
  return false;
};

console.log(areThereDuplicates(1, 2, 3, 2)); //True

//Resolved with frequency counters

const areThereDuplicatesFC = (...numbers) => {
  const freqCounter = {};

  numbers.forEach((number) => {
    freqCounter[number] = ++freqCounter[number] || 1;
  });

  for (let key in freqCounter) {
    if (freqCounter[key] > 1) {
      return true;
    }
  }
  return false;
};

console.log(areThereDuplicatesFC(1, 2, 3, 2)); //True

//areThereDuplicates One Liner Solution
function areThereDuplicatesLS() {
  return new Set(arguments).size !== arguments.length;
}
