//Acepta un array y un numero, la suma tiene que dar el numero que quiero
//true si existen 2 numeros que sumen lo que quiero

const sumPair = (arr, num) => {
  const arrSorted = arr.sort((a, b) => {
    return a - b;
  });
  let start = 0;
  let end = arr.length - 1;
  while (start < end) {
    const currentSum = arrSorted[start] + arrSorted[end];
    if (currentSum === num) {
      return true;
    } else if (currentSum < num) {
      start++;
    } else {
      end--;
    }
  }
  return false;
};

console.log(sumPair([1, 5, 3], 8)); //true

console.log(sumPair([1, 2, 3, 6], 5));
