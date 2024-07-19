function bubbleSort(arr) {
  let n = arr.length;
  let swapped;

  // Traverse through all array elements
  do {
    swapped = false;
    for (let i = 0; i < n - 1; i++) {
      // Compare adjacent elements
      if (arr[i] > arr[i + 1]) {
        // Swap if they are in the wrong order
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
        swapped = true;
      }
    }
    // Reduce the range to be sorted by one element
    n--;
  } while (swapped);

  return arr;
}

// Example usage:
const arr = [64, 34, 25, 12, 22, 11, 90];
console.log("Unsorted array:", arr);
console.log("Sorted array:", bubbleSort(arr));
