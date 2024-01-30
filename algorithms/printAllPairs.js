//O(n2) PARABOLA
const printAllPairs = (n) => {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      console.log("  ");
      console.log(i, j);
    }
  }
};

printAllPairs(4);
