function bfs(n, m, edges, s) {
  // Write your code here
  // Crear la lista de adyacencia
  let graph = new Array(n + 1).fill(null).map(() => []);
  for (let [u, v] of edges) {
    graph[u].push(v);
    graph[v].push(u);
  }

  // Inicializar el array de distancias
  let distances = new Array(n + 1).fill(-1);
  distances[s] = 0;

  // Cola para BFS
  let queue = [s];

  // Ejecutar BFS
  while (queue.length > 0) {
    let node = queue.shift();
    for (let neighbor of graph[node]) {
      if (distances[neighbor] === -1) {
        distances[neighbor] = distances[node] + 6;
        queue.push(neighbor);
      }
    }
  }

  // Eliminar la distancia del nodo inicial y devolver las distancias
  distances.splice(s, 1); // Eliminar la posicion s
  distances.splice(0, 1); // Eliminar la posición 0
  return distances;
}
