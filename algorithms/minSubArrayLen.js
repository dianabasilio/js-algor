// Sliding Window - minSubArrayLen
//DYNAMIC
// Write a function called minSubArrayLen which accepts two parameters - an array of positive integers and a positive integer.
// This function should return the minimal length of a contiguous subarray of which the sum is greater than or equal to the integer passed to the function. If there isn't one, return 0 instead.
// Examples:
// minSubArrayLen([2,3,1,2,4,3], 7) // 2 -> because [4,3] is the smallest subarray
// minSubArrayLen([2,1,6,5,4], 9) // 2 -> because [5,4] is the smallest subarray
// minSubArrayLen([3,1,7,11,2,9,8,21,62,33,19], 52) // 1 -> because [62] is greater than 52
// minSubArrayLen([1,4,16,22,5,7,8,9,10],39) // 3
// minSubArrayLen([1,4,16,22,5,7,8,9,10],55) // 5
// minSubArrayLen([4, 3, 3, 8, 1, 2, 3], 11) // 2
// minSubArrayLen([1,4,16,22,5,7,8,9,10],95) // 0
// Time Complexity - O(n)
// Space Complexity - O(1)

const minSubArrayLen = (arr, num) => {
  //ordenar los numeros de menor a mayor
  const arrSorted = arr.sort((a, b) => {
    return a - b;
  });
  console.log("arrSorted", arrSorted);
  const lastIndex = arrSorted.length - 1;
  //Tomar el último numero como mi maxSum en un array
  let maxSum = arrSorted[lastIndex];
  if (maxSum >= num) {
    return 1;
  }

  let currentMaxSum = maxSum;

  for (let i = 1; i < arrSorted.length; i++) {
    //menos el pasado, más el siguiente
    currentMaxSum = currentMaxSum + arrSorted[lastIndex - i];
    //el más grande se queda
    maxSum = Math.max(maxSum, currentMaxSum);
    if (maxSum >= num) {
      return i + 1;
    }
  }
  console.log("maxsum", maxSum);
  return 0;

  //Si este es mayor o igual a num return lenmaxLen
  //Si es más pequeño toma el siguiente
};

// console.log(minSubArrayLen([2, 3, 1, 2, 4, 3], 7));

// console.log(minSubArrayLen([2, 3, 1, 2, 4, 3], 7)); // 2 -> because [4,3] is the smallest subarray
// console.log(minSubArrayLen([2, 1, 6, 5, 4], 9)); // 2 -> because [5,4] is the smallest subarray
// console.log(minSubArrayLen([3, 1, 7, 11, 2, 9, 8, 21, 62, 33, 19], 52)); // 1 -> because [62] is greater than 52
// console.log(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 39)); // 3
// console.log(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 55)); // 5
// console.log(minSubArrayLen([4, 3, 3, 8, 1, 2, 3], 11)); // 2

// console.log(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 95)); // 0
//correcto

const minSubArrayLen2 = (nums, target) => {
  let minLength = Infinity;
  let sum = 0;
  let start = 0;

  for (let end = 0; end < nums.length; end++) {
    console.log("start", start);
    console.log("end", end);
    sum += nums[end];
    console.log("sum", sum);

    while (sum >= target) {
      minLength = Math.min(minLength, end - start + 1);
      console.log("minLength", minLength);
      sum -= nums[start];
      console.log("sum", sum);
      start++;
    }
    console.log("start", start);
    console.log("end", end);
    console.log("  ");
  }

  return minLength === Infinity ? 0 : minLength;
};

console.log(minSubArrayLen2([3, 1, 7, 11, 2, 9, 8, 21, 62, 33, 19], 52));
