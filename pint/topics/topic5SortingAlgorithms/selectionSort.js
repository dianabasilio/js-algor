function selectionSort(arr) {
  let n = arr.length;

  // Traverse through all array elements
  for (let i = 0; i < n; i++) {
    // Find the minimum element in unsorted part of array
    let minIndex = i;
    for (let j = i + 1; j < n; j++) {
      console.log("arr[j]", arr[j]);
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    console.log("minIndex", minIndex, "value", arr[minIndex]);

    // Swap the found minimum element with the first element
    if (minIndex !== i) {
      [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
    }
    console.log("arr", arr);
  }

  return arr;
}

// Example usage:
const arr = [64, 34, 25, 12, 22, 11, 90];
console.log("Unsorted array:", arr);
console.log("Sorted array:", selectionSort(arr));

function selectionSort2(arr) {
  let n = arr.length;
  let minIndex = 0;

  for (let i = 0; i < n; i++) {
    //J=i+1 porque no va a comparar con el mismo tiene que comparar con el que sigue
    for (let j = i + 1; j < n; i++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    //Queremos cambiar hasta que ya se haya dando bien cuenta de cual es el min de todo
    //lo de la derecha
    if (minIndex !== i) {
      [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
    }
  }
}
