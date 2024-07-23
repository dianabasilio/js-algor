function processData(input) {
  class Node {
    constructor(data) {
      this.data = data;
      this.left = null;
      this.right = null;
    }
  }

  class BinaryTree {
    constructor() {
      this.root = null;
    }

    insert(data) {
      const newNode = new Node(data);
      if (this.root === null) {
        this.root = newNode;
        return;
      }

      let currentNode = this.root;
      while (true) {
        if (data < currentNode.data) {
          if (currentNode.left === null) {
            currentNode.left = newNode;
            break;
          }
          currentNode = currentNode.left;
        } else if (data > currentNode.data) {
          //Si no hay nada ahí lo pone
          if (currentNode.right === null) {
            currentNode.right = newNode;
            break;
          }
          //si sí hay algo entonces vuelve a correr el ciclo pero actualizando currentNode
          currentNode = currentNode.right;
        } else {
          break; // No insertar duplicados
        }
      }
    }

    //DFS preorder
    preOrderTraversal() {
      const result = [];

      function traverse(node) {
        //este if para asegurar que termina la recursividad
        if (node === null) return;
        result.push(node.data); // Visitar el nodo raíz
        traverse(node.left); // Recorrer el subárbol izquierdo
        traverse(node.right); // Recorrer el subárbol derecho
      }

      traverse(this.root);
      return result;
    }
  }

  const numbers = input.trim().split("\n")[1].split(" ").map(Number);
  const tree = new BinaryTree();
  numbers.forEach((num) => tree.insert(num));
  console.log(tree.preOrderTraversal().join(" "));
}

const input = `
  6
  4 2 3 1 7 6`;

processData(input);
