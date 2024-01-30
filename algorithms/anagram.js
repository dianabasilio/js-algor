//FREQ COUNTERS PATTERN
//same letters different order

function validAnagram(string1, string2) {
  // add whatever parameters you deem necessary - good luck!
  if (string1.length !== string2.length) {
    return false;
  }

  const string1Array = string1.split("");
  const string2Array = string2.split("");

  const freqCounter1 = {};
  const freqCounter2 = {};

  string1Array.forEach((letter) => {
    freqCounter1[letter] = ++freqCounter1[letter] || 1;
  });

  string2Array.forEach((letter) => {
    freqCounter2[letter] = ++freqCounter2[letter] || 1;
  });

  console.log(freqCounter1);
  console.log(freqCounter2);

  for (let letter of string1Array) {
    if (!(letter in freqCounter2)) {
      return false;
    }
    if (freqCounter1[letter] !== freqCounter2[letter]) {
      return false;
    }
  }
  return true;
}

console.log(validAnagram("cinema", "nemaci"));
//true
