// Creating multiple pointers or values that correspond to an index or position and move towards the beginning, end,
// middle based on a certain condition

//Very efficient for solving problems with minimal space complexity as well

//EXAMPLE

//sumZero

//write a function called sumZero wich accepts a sorter array of integers. The function should find the first pair
//where the sum is zero. Return an array that includes both values that sum zero or undefinded if a pair does not exist.

//O(N2)
const sumZero = (array1) => {
  for (let i = 0; i < array1.length; i++) {
    for (let j = i + 1; j < array1.length; j++) {
      if (array1[i] + array1[j] === 0) return [array1[i], array1[j]];
    }
  }
};

console.log(sumZero([-3, -2, -1, 0, 1, 2, 3]));

const sumZeroForEach = (array1) => {
  let result = [];

  array1.forEach((num1, index1) => {
    console.log("num1,index1");
    console.log(num1, index1);
    array1.forEach((num2, index2) => {
      console.log("num2,index2");
      console.log(num2, index2);
      if (index1 < index2 && num1 + num2 === 0) {
        result = [num1, num2];
      }
    });
  });

  return result;
};

console.log(sumZeroForEach([-1, 0, 1]));

//O(N)

const sumZeroRefactor = (arr) => {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    let sum = arr[left] + arr[right];
    if (sum === 0) {
      return [arr[left], arr[right]];
    } else if (sum > 0) {
      right--;
    } else {
      left++;
    }
  }
};

console.log(sumZeroRefactor([-2, -1, 0, 1, 3, 4]));

//MULTIPLE POINTERS example

//Input: sorted array
//outfit: array unique values

//console.log(countUniqueValues([1, 2, 2, 3, 4, 4]));

function countUniqueValues(arr) {
  // add whatever parameters you deem necessary - good luck!
  let count = 1;

  let left = 0;
  let right = left + 1;

  if (arr.length === 0) {
    return 0;
  }

  if (arr.length === 1) {
    return count;
  }

  while (right < arr.length) {
    console.log("count", count);

    console.log(" arr[left]", arr[left]);

    console.log(" arr[right]", arr[right]);

    if (arr[left] !== arr[right]) {
      console.log("son diferentes");
      count++;
      left++;
      right++;
    } else {
      console.log("son iguales");
      left++;
      right++;
    }
    console.log("OTROO");
  }

  return count;
}

console.log(countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13])); //7
