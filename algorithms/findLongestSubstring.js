// Sliding Window - findLongestSubstring
// Write a function called findLongestSubstring, which accepts a string and returns the length of the longest substring with all distinct characters.
// findLongestSubstring('') // 0
// findLongestSubstring('rithmschool') // 7
// findLongestSubstring('thisisawesome') // 6
// findLongestSubstring('thecatinthehat') // 7
// findLongestSubstring('bbbbbb') // 1
// findLongestSubstring('longestsubstring') // 8
// findLongestSubstring('thisishowwedoit') // 6
// Time Complexity - O(n)

//console.log(findLongestSubstring("thisisawesome"));

const findLongestSubstring = (str) => {
  let actualStringLen = {};
  let longestLen = 0;
  let start = 0;
  str.split("").forEach((letter, end) => {
    console.log(letter);
    console.log("start", start, str[start]);
    if (actualStringLen[letter]) {
      console.log("IGUALES");
      //Se busca el max porque puede ser que start ya este más avanzado si la letra salió antes
      start = Math.max(start, actualStringLen[letter]);
    }
    console.log("start", start, str[start]);
    console.log("end", end, str[end]);

    actualStringLen[letter] = end + 1;
    //Es más 1 porque a los array hay que sumarle 1 para que sea el len real
    longestLen = Math.max(longestLen, end - start + 1);
    console.log("actualStringLen", actualStringLen);
    console.log("longestLen", longestLen);
    console.log("   ");
  });
  return longestLen;
};

console.log(findLongestSubstring("thisishowwedoit"));
