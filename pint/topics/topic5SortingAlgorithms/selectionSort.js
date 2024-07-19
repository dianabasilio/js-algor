function selectionSort(arr) {
  let n = arr.length;

  // Traverse through all array elements
  for (let i = 0; i < n - 1; i++) {
    // Find the minimum element in unsorted part of array
    let minIndex = i;
    for (let j = i + 1; j < n; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }

    // Swap the found minimum element with the first element
    if (minIndex !== i) {
      [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
    }
  }

  return arr;
}

// Example usage:
const arr = [64, 34, 25, 12, 22, 11, 90];
console.log("Unsorted array:", arr);
console.log("Sorted array:", selectionSort(arr));
