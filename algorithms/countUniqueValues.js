//MULTIPLE POINTERS

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
