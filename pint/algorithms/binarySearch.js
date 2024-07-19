//Binary search is a much faster form of search
//Rather than eliminating one element at a time you can eliminate half

//Binary search only works on sorted arrays!

//Aquí se aplica el divide and conquer

const binarySearch = (arr, num) => {
  // add whatever parameters you deem necessary - good luck!
  let left = 0;
  let right = arr.length - 1;
  let middle = Math.floor((right + left) / 2);

  while (arr[middle] !== num && left <= right) {
    if (num < arr[middle]) {
      right = middle - 1;
    } else {
      left = middle + 1;
    }

    middle = Math.floor((right + left) / 2);
  }

  if (arr[middle] === num) {
    console.log(middle);
    return middle;
  }

  console.log(-1);
  return -1;
};

binarySearch([1, 2, 3, 4, 5], 2); // 1
binarySearch([1, 2, 3, 4, 5], 3); // 2
binarySearch([1, 2, 3, 4, 5], 5); // 4
binarySearch([1, 2, 3, 4, 5], 6); // -1
binarySearch(
  [
    5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95, 96, 98,
    99,
  ],
  10
); // 2
binarySearch(
  [
    5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95, 96, 98,
    99,
  ],
  95
); // 16
binarySearch(
  [
    5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95, 96, 98,
    99,
  ],
  100
); // -1
