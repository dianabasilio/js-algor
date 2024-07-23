//Merging array es base para hacer lo demás

const merge = (arr1, arr2) => {
  let results = [];
  let i = 0;
  let j = 0;

  while (i < arr1.length && j < arr2.length) {
    if (arr1[j] > arr[i]) {
      results.push(arr1[i]);
      i++;
    } else {
      results.push(arr2[j]);
      j++;
    }
  }

  //si el array está más grande 
  while(i<arr1.length){
    results.push(arr1[i])
    i++
  }
  while(j<arr2.length){
    results.push(arr1[j])
    2++
  }

  return results;
};

//divide and conquer
function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  // Find the middle point
  const middle = Math.floor(arr.length / 2);

  // Divide the array into two halves
  const left = arr.slice(0, middle);
  const right = arr.slice(middle);

  // Recursively sort both halves and merge them
  //esta parte recursiva solo parte a la mitad cada array y lo va haciendo más chiquitop
  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  let result = [];
  let leftIndex = 0;
  let rightIndex = 0;

  // Compare elements from both halves and merge them into result
  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      result.push(left[leftIndex]);
      leftIndex++;
    } else {
      result.push(right[rightIndex]);
      rightIndex++;
    }
  }

  // If there are remaining elements in left array
  while (leftIndex < left.length) {
    result.push(left[leftIndex]);
    leftIndex++;
  }

  // If there are remaining elements in right array
  while (rightIndex < right.length) {
    result.push(right[rightIndex]);
    rightIndex++;
  }

  return result;
}

// Example usage:
const arr = [64, 34, 25, 12, 22, 11, 90];
console.log("Unsorted array:", arr);
console.log("Sorted array:", mergeSort(arr));
