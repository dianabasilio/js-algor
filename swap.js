const swap = (arr, idx1, idx2) => {
  [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
  return arr;
};

console.log(swap([1, 2, 3], 0, 2));

const swap2 = (arr, idx1, idx2) => {
  let temp = arr[idx1];
  arr[idx1] = arr[idx2];
  arr[idx2] = temp;
  return arr;
};
console.log(swap2([1, 2, 3], 0, 2));
