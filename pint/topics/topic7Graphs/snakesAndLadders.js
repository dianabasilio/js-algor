function quickestWayUp(ladders, snakes) {
  const boardSize = 100; // The board is 10x10, so 100 cells
  const board = Array.from({ length: boardSize + 1 }, (_, i) => i); // Start with each cell pointing to itself

  // Apply ladders
  for (const [start, end] of ladders) {
    board[start] = end;
  }

  // Apply snakes
  for (const [start, end] of snakes) {
    board[start] = end;
  }

  // BFS initialization
  const queue = [[1, 0]]; // [current cell, number of moves]
  const visited = new Map();
  visited.set(1, 0); // Mark the start cell with 0 moves

  while (queue.length > 0) {
    const [current, moves] = queue.shift();

    // Try all possible dice rolls
    for (let dice = 1; dice <= 6; dice++) {
      let next = current + dice;
      if (next > 100) continue; // Skip if the move goes beyond the board

      next = board[next]; // Apply ladder or snake

      if (next === 100) {
        return moves + 1; // Found the shortest path to the end
      }

      if (!visited.has(next)) {
        visited.set(next, moves + 1);
        queue.push([next, moves + 1]);
      }
    }
  }

  return -1; // If not reachable
}

// Ejemplo de uso
const ladders = [
  [3, 22],
  [5, 8],
  [11, 26],
  [20, 29],
  [17, 4],
];
const snakes = [
  [27, 1],
  [21, 9],
  [19, 7],
  [17, 4],
  [13, 2],
];

const result = quickestWayUp(ladders, snakes);
console.log(result); // Imprime el número mínimo de movimientos para llegar a 100
