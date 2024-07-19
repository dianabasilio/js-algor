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
          if (currentNode.right === null) {
            currentNode.right = newNode;
            break;
          }
          currentNode = currentNode.right;
        } else {
          break; // No insertar duplicados
        }
      }
    }

    preOrderTraversal() {
      const result = [];
      if (this.root === null) return result;

      const stack = [this.root];
      while (stack.length > 0) {
        const node = stack.pop();
        result.push(node.data);
        if (node.right !== null) stack.push(node.right);
        if (node.left !== null) stack.push(node.left);
      }

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
