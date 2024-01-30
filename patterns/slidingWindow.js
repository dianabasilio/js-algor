//This pattern involves creating a window wich can either be an array or a number from one position to another.

//Depending on a certain condition, the window either increases or closes (and a new window is created).

//Very useful for keeping track of a subset of data in an array/string etc.

//O(N2)

const maxSubarraySum = (arr, num) => {
  if (num > arr.length) {
    return null;
  }

  var max = -Infinity;
  for (let i = 0; i < arr.length - num + 1; i++) {
    temp = 0;
    for (let j = 0; j < num; j++) {
      temp += arr[i + j];
    }
    if (temp > max) {
      max = temp;
    }
    console.log("temp", temp);
    console.log("max", max);
  }
  return max;
};

//console.log(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 2)); //10
//maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 4); //17
//maxSubarraySum([], 2); //null

//REFACTORED
//O(N)

function maxSubarraySumRefactor(arr, num) {
  let maxSum = 0;
  let tempSum = 0;

  if (arr.length < num) return null;
  //Aquí pasa la primer suma de los primeros num valores del array
  for (let i = 0; i < num; i++) {
    maxSum += arr[i];
    console.log(maxSum);
  }
  console.log("maxSum", maxSum);
  //esa primer suma será el nuevo valor tempsum
  tempSum = maxSum;

  //Aquí i empieza desde num porque la primer suma ya se hizo
  for (let i = num; i < arr.length; i++) {
    //menos el pasado, más el siguiente
    tempSum = tempSum - arr[i - num] + arr[i];
    //el más grande se queda
    maxSum = Math.max(maxSum, tempSum);
  }
  return maxSum;
}

console.log(maxSubarraySumRefactor([1, 2, 3, 4, 5], 2));
