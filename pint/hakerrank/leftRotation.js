function rotLeft(a, d) {
  const n = a.length;
  // Compute the effective rotations
  const rotations = d % n;
  console.log("rotations", rotations, "d", d, "n", n);
  // Slice the array into two parts and concatenate them
  console.log("a.slice(0, rotations)", a.slice(0, rotations));

  console.log("a.slice(rotations)", a.slice(rotations));
  const rotatedArray = a.slice(rotations).concat(a.slice(0, rotations));
  return rotatedArray;
}

// Sample Input
const n = 5;
const d = 4;
const a = [1, 2, 3, 4, 5];

// Function call
const result = rotLeft(a, d);

// Output the result
console.log(result); // Output: 5 1 2 3 4
