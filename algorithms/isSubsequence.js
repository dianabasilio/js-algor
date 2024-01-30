// Multiple Pointers - isSubsequence
// Write a function called isSubsequence which takes in two strings and checks whether the characters in the first string form a subsequence of the characters in the second string. In other words, the function should check whether the characters in the first string appear somewhere in the second string, without their order changing.
// Examples:
// isSubsequence('hello', 'hello world'); // true
// isSubsequence('sing', 'sting'); // true
// isSubsequence('abc', 'abracadabra'); // true
// isSubsequence('abc', 'acb'); // false (order matters)

// Your solution MUST have AT LEAST the following complexities:
// Time Complexity - O(N + M)
// Space Complexity - O(1)

const isSubsequence = (string1, string2) => {
  let index1 = 0;
  let index2 = 0;

  //Si el segundo indice

  while (index2 < string2.length) {
    console.log("index1", index1);
    console.log("index2", index2);
    const sameLetter = string1[index1] === string2[index2];
    if (sameLetter) {
      //Si ambas letras son iguales suman 1 ambos indices
      index1++;
      index2++;
    } else {
      //si no solo el segundo indice sube
      index2++;
    }
    //logró obtener todas las letras iguales porque index1 solo sube si se encuentran
    if (index1 === string1.length) {
      return true;
    }
  }
  return false;
};

console.log(isSubsequence("hello", "hello world")); //true
console.log(isSubsequence("sing", "sting")); // true
console.log(isSubsequence("abc", "acb")); // false (order matters)

const string1 = "hj";

console.log(string1[0]);
