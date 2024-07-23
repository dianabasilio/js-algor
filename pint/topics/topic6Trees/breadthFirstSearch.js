class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

function bfs(root) {
  if (root === null) {
    return;
  }

  let result = [];
  let queue = [];
  queue.push(root);

  while (queue.length > 0) {
    let currentNode = queue.shift();
    console.log(currentNode.data);
    result.push(currentNode.data);

    if (currentNode.left !== null) {
      queue.push(currentNode.left);
    }
    if (currentNode.right !== null) {
      queue.push(currentNode.right);
    }
  }
  return result;
}

// Ejemplo de uso
let root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);

bfs(root); // Output: 1 2 3 4 5
