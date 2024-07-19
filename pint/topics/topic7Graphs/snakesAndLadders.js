// FUNCION quickestWayUp(ladders, snakes):
//     DEFINIR boardSize COMO 100  // Tamaño del tablero (10x10 = 100 celdas)
//     DEFINIR board COMO una lista de tamaño boardSize + 1 donde cada celda apunta a sí misma

//     // Aplicar las escaleras
//     PARA CADA [start, end] EN ladders:
//         board[start] = end

//     // Aplicar las serpientes
//     PARA CADA [start, end] EN snakes:
//         board[start] = end

//     // Inicializar BFS
//     DEFINIR queue COMO una cola con el elemento [1, 0] // [celda actual, número de movimientos]
//     DEFINIR visited COMO un conjunto vacío
//     AGREGAR 1 A visited

//     MIENTRAS queue NO esté vacía:
//         EXTRAER el elemento [current, moves] de la cola

//         // Intentar todos los posibles lanzamientos de dados (1 a 6)
//         PARA CADA dado DE 1 HASTA 6:
//             DEFINIR next COMO current + dado
//             SI next > 100 ENTONCES CONTINUAR // Saltar si el movimiento sale del tablero

//             next = board[next] // Aplicar escalera o serpiente

//             SI next ES 100 ENTONCES:
//                 RETORNAR moves + 1 // Encontramos el camino más corto al final

//             SI next NO está en visited:
//                 AGREGAR next A visited
//                 AGREGAR [next, moves + 1] A queue

//     RETORNAR -1 // Si no se puede llegar al final

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
  const visited = new Set();
  visited.add(1);

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
        visited.add(next);
        queue.push([next, moves + 1]);
      }
    }
  }

  return -1; // If not reachable
}
