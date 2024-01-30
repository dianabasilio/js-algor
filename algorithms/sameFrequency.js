//frequency counter pattern

const sameFrequency = (num1, num2) => {
  const array1 = String(num1).split("");
  const array2 = String(num2).split("");

  console.log("array1", array1);
  console.log("array2", array2);

  const freqCounter1 = {};
  const freqCounter2 = {};

  array1.forEach((number) => {
    freqCounter1[number] = ++freqCounter1[number] || 1;
  });

  array2.forEach((number) => {
    freqCounter2[number] = ++freqCounter2[number] || 1;
  });
  console.log("freqCounter1", freqCounter1);
  console.log("freqCounter2", freqCounter2);

  for (let key in freqCounter1) {
    if (!(key in freqCounter2)) {
      return false;
    } else if (freqCounter1[key] !== freqCounter2[key]) {
      return false;
    }
  }

  return true;
};

console.log(sameFrequency(1233, 3231));
