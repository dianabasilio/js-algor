function bfs(n, m, edges, s) {
  // Crear la lista de adyacencia como un objeto
  let graph = {};

  // Construir el grafo a partir de las aristas usando for
  for (let i = 1; i <= n; i++) {
    graph[i] = [];
  }

  for (let [u, v] of edges) {
    graph[u].push(v);
    graph[v].push(u);
  }

  console.log("graph", graph);

  // Inicializar el array de distancias con un bucle for
  let distances = [];
  for (let i = 0; i <= n; i++) {
    distances[i] = -1;
  }
  distances[s] = 0;
  console.log("distances", distances);

  // Cola para BFS
  let queue = [s];
  console.log("queue", queue);
  console.log("-----");

  // Ejecutar BFS
  while (queue.length > 0) {
    let node = queue.shift();
    console.log("node", node);
    graph[node].forEach((neighbor) => {
      if (distances[neighbor] === -1) {
        //Primera iteración
        // distances[2] = distances[1] + 6 = 0 + 6 = 6
        // distances[3] = distances[1] + 6 = 0 + 6 = 6

        distances[neighbor] = distances[node] + 6;
        queue.push(neighbor);
        console.log("queue", queue);
      }
    });
    console.log("-----");
  }

  // Eliminar la distancia del nodo inicial y devolver las distancias
  distances.splice(s, 1); // Eliminar la posicion s
  distances.splice(0, 1); // Eliminar la posicion 0
  return distances;
}

// Ejemplo de uso
const n = 6; // Número de nodos
const m = 4; // Número de aristas
const edges = [
  [1, 2],
  [1, 3],
  [2, 4],
  [3, 5],
];
const s = 1; // Nodo inicial

const result = bfs(n, m, edges, s);
console.log(result); // Imprimir las distancias excluyendo el nodo inicial
