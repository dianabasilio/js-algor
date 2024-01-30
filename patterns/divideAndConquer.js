//This pattern involves dividing a data set into smaller chunks and then repeating a process with a subset of data.

//This patter can tremendously decrease time complexity

//EXAMPLE

//Given a sorted array of integers, write a function called search, that accepst a value and search if it is inside the array,
//the output should be the index where it was found if not found -1.

//NAIVE SOLUTION

//O(N)

const search = (arr, num) => {
  let elementIndex = -1;
  arr.forEach((element, index) => {
    console.log("element", element);
    console.log("index", index);
    console.log(num);
    if (element === num) {
      elementIndex = index;
    }
  });
  console.log("elementIndex", elementIndex);
  return elementIndex;
};
const numbers = [1, 2, 3, 4];

console.log("search", search(numbers, 2));

//También pudiera solucionarse con indexOf

console.log(numbers.indexOf(2));
//1
console.log(numbers.indexOf(82));

// REFACTOR
// log(N)

console.log("REFACTOR");

const searchRefactor = (array, val) => {
  let minIndex = 0;
  let maxIndex = array.length - 1;

  while (minIndex <= maxIndex) {
    console.log("minIndex", minIndex);
    console.log("maxIndex", maxIndex);
    let middleIndex = Math.floor((minIndex + maxIndex) / 2);
    let currentelement = array[middleIndex];
    console.log("currentelement", currentelement);

    if (currentelement < val) {
      minIndex = middleIndex + 1;
    } else if (currentelement > val) {
      minIndex = middleIndex - 1;
    } else {
      return currentelement;
    }
  }
};

console.log(searchRefactor([0, 1, 2, 3, 4], 4));
