function bubbleSort(arr) {
  let n = arr.length;

  for (let i = n; i > 0; i--) {
    //este primer for es solo decir cuantas veces tiene que recorrer
    //se va haciendo -- porque el ultimo ya está ordenado
    console.log("i", i);
    for (let j = 0; j < i - 1; j++) {
      console.log("arr[j]", arr[j]);
      console.log("arr[j+1]", arr[j + 1]);
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
    console.log("arr", arr);
    console.log("-------");
  }
  return arr;
}

// Example usage:
const arr = [3, 2, 5, 8, 1];
console.log("Unsorted array:", arr);
console.log("Sorted array:", bubbleSort(arr));
