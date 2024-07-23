class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  // Method to add a vertex
  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = [];
    }
  }

  // Method to add an edge (undirected)
  addEdge(vertex1, vertex2) {
    if (this.adjacencyList[vertex1] && this.adjacencyList[vertex2]) {
      this.adjacencyList[vertex1].push(vertex2);
      this.adjacencyList[vertex2].push(vertex1);
    }
  }

  // Method to add a directed edge
  addDirectedEdge(fromVertex, toVertex) {
    if (this.adjacencyList[fromVertex]) {
      this.adjacencyList[fromVertex].push(toVertex);
    }
  }

  // Method to remove an edge
  removeEdge(vertex1, vertex2) {
    this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
      (v) => v !== vertex2
    );
    this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
      (v) => v !== vertex1
    );
  }

  // Method to remove a vertex
  removeVertex(vertex) {
    while (this.adjacencyList[vertex].length) {
      const adjacentVertex = this.adjacencyList[vertex].pop();
      this.removeEdge(vertex, adjacentVertex);
    }
    delete this.adjacencyList[vertex];
  }

  // Method to check if two vertices are connected
  areConnected(vertex1, vertex2) {
    return (
      this.adjacencyList[vertex1] &&
      this.adjacencyList[vertex1].includes(vertex2)
    );
  }

  // Method to print the graph
  printGraph() {
    for (let vertex in this.adjacencyList) {
      console.log(vertex, "->", this.adjacencyList[vertex].join(", "));
    }
  }

  // Recursive DFS traversal
  dfsRecursive(start) {
    const visited = {}; // Track visited vertices
    const result = []; // Store the DFS order

    const dfs = (vertex) => {
      if (!vertex) return null;
      visited[vertex] = true;
      result.push(vertex);

      // Use forEach to visit each neighbor
      this.adjacencyList[vertex].forEach((neighbor) => {
        if (!visited[neighbor]) {
          dfs(neighbor);
        }
      });
    };

    dfs(start);
    return result;
  }

  // Iterative DFS traversal
  dfsIterative(start) {
    const stack = [start];
    const result = [];
    const visited = {};

    visited[start] = true;

    while (stack.length) {
      const vertex = stack.pop();
      result.push(vertex);

      // Use forEach to visit each neighbor
      this.adjacencyList[vertex].forEach((neighbor) => {
        if (!visited[neighbor]) {
          visited[neighbor] = true;
          stack.push(neighbor);
        }
      });
    }

    return result;
  }

  // Iterative BFS traversal
  bfs(start) {
    const queue = [start];
    const result = [];
    const visited = {};

    visited[start] = true;

    while (queue.length) {
      const vertex = queue.shift();
      result.push(vertex);

      // Use forEach to visit each neighbor
      this.adjacencyList[vertex].forEach((neighbor) => {
        if (!visited[neighbor]) {
          visited[neighbor] = true;
          queue.push(neighbor);
        }
      });
    }

    return result;
  }
}

// Example usage
const graph = new Graph();
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");

graph.addEdge("A", "B");
graph.addEdge("A", "C");
graph.addEdge("B", "D");
graph.addEdge("C", "E");

console.log("Graph Adjacency List:");
graph.printGraph();

console.log("DFS Recursive:", graph.dfsRecursive("A"));
console.log("DFS Iterative:", graph.dfsIterative("A"));
console.log("BFS:", graph.bfs("A"));
