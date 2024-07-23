class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

function height(root) {
  if (root === null) {
    return -1;
  }

  let queue = [];
  queue.push(root);
  let height = -1;

  while (queue.length > 0) {
    let levelSize = queue.length;
    console.log("levelSize", levelSize);
    //Este for se asegura de que termine un nivel para sumarle al height
    for (let i = 0; i < levelSize; i++) {
      console.log("queue", queue);
      let currentNode = queue.shift();
      console.log("currentNode", currentNode);
      // Añadir el hijo izquierdo si existe
      if (currentNode.left !== null) {
        queue.push(currentNode.left);
      }
      // Añadir el hijo derecho si existe
      if (currentNode.right !== null) {
        queue.push(currentNode.right);
      }
    }
    console.log("----");
    // Incrementar la altura después de procesar todos los nodos en el nivel actual
    height++;
  }

  return height;
}

// Ejemplo de uso
let root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);

console.log(height(root)); // Output: 2
