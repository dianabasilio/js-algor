function dfsRecursive(graph, start) {
  // Initialize visited object and result array
  let visited = {};
  let result = [];

  // Inner function for recursive DFS
  function dfs(node) {
    // Mark the current node as visited
    visited[node] = true;

    // Add the current node to the result array
    result.push(node);

    // Log the current node (or perform any operation)
    console.log(node);

    // Recursively visit each unvisited neighbor using forEach
    graph[node].forEach((neighbor) => {
      if (!visited[neighbor]) {
        dfs(neighbor);
      }
    });
  }

  // Start DFS from the initial node
  dfs(start);

  // Return the result array with the order of visited nodes
  return result;
}

// Example graph as an adjacency list
const graph = {
  A: ["B", "C"],
  B: ["A", "D"],
  C: ["A", "D", "E"],
  D: ["B", "C"],
  E: ["C"],
};

// Call the recursive DFS starting from node 'A'
const result = dfsRecursive(graph, "A");
console.log("DFS Order:", result);
