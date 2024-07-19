function processData(input) {
  const queue = [];
  const lines = input.split("\n");
  console.log("lines", lines);
  const numberOfOperations = parseInt(lines[0]);

  for (let i = 1; i <= numberOfOperations; i++) {
    console.log("queue", queue);
    const operation = lines[i].split(" ");
    const opType = parseInt(operation[0]);

    if (opType === 1) {
      const value = parseInt(operation[1]);
      queue.push(value);
    } else if (opType === 2) {
      queue.shift(); // Inefficient for large arrays
    } else if (opType === 3) {
      console.log(queue[0]);
    }
  }
}

// Example usage:
const input = `10
1 42
2
1 14
3
1 28
3
1 60
1 78
2
2`;

processData(input);
