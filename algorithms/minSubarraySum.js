// Sliding Window - minSubarraySum
//Recibe un array y un número de la longitud de la suma de array

const minSubArraySum = (arr, num) => {
  let minSum = Infinity;
  let currentSum = 0;

  for (let i = 0; i < num; i++) {
    currentSum += arr[i];
    console.log("currentSum", currentSum);
  }

  minSum = currentSum;

  for (let i = num; i < arr.length; i++) {
    console.log("arr[i - num]", arr[i - num]);
    console.log("arr[i]", arr[i]);
    currentSum = currentSum - arr[i - num] + arr[i];
    console.log("currentSum", currentSum);
    minSum = Math.min(minSum, currentSum);
  }
  return minSum;
};

console.log(minSubArraySum([1, 2, 3, 4], 2));
