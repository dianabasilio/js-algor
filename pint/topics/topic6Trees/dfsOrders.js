class TreeNode {
  constructor(data, left = null, right = null) {
    this.data = data;
    this.left = left;
    this.right = right;
  }
}

//PreOrder: root, left, right
function dfsPreorder(root) {
  if (root === null) return [];

  const result = [];
  const stack = [root];

  while (stack.length > 0) {
    const node = stack.pop();
    result.push(node.data);

    if (node.right) stack.push(node.right);
    if (node.left) stack.push(node.left);
  }

  return result;
}

//InOrder: Left, Root, Right

function dfsInorder(root) {
  const result = [];
  const stack = [];
  let current = root;

  while (current !== null || stack.length > 0) {
    while (current !== null) {
      stack.push(current);
      current = current.left;
    }
    current = stack.pop();
    result.push(current.data);
    current = current.right;
  }

  return result;
}

//PostOrder: Left, Right, root
function dfsPostorder(root) {
  if (root === null) return [];

  const result = [];
  const stack = [root];
  const output = [];

  while (stack.length > 0) {
    const node = stack.pop();
    output.push(node);

    if (node.left) stack.push(node.left);
    if (node.right) stack.push(node.right);
  }

  while (output.length > 0) {
    result.push(output.pop().data);
  }

  return result;
}

const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);
root.right.left = new TreeNode(6);
root.right.right = new TreeNode(7);

console.log(dfsPreorder(root)); // Output: [1, 2, 4, 5, 3, 6, 7]
console.log(dfsInorder(root)); // Output: [4, 2, 5, 1, 6, 3, 7]
console.log(dfsPostorder(root)); // Output: [4, 5, 2, 6, 7, 3, 1]

//RECURSIVAAA MÁS FÁCIL DE ENTENDER

//PreOrder: root, left, right
function dfsPreorder(root) {
  const result = [];

  function traverse(node) {
    //este if para asegurar que termina la recursividad
    if (node === null) return;
    result.push(node.data); // Visitar el nodo raíz
    traverse(node.left); // Recorrer el subárbol izquierdo
    traverse(node.right); // Recorrer el subárbol derecho
  }

  traverse(root);
  return result;
}

//InOrder: Left, Root, Right
function dfsInorder(root) {
  const result = [];

  function traverse(node) {
    if (node === null) return;
    traverse(node.left); // Recorrer el subárbol izquierdo
    result.push(node.data); // Visitar el nodo raíz
    traverse(node.right); // Recorrer el subárbol derecho
  }

  traverse(root);
  return result;
}

//PostOrder: Left, Right, root
function dfsPostorder(root) {
  const result = [];

  function traverse(node) {
    if (node === null) return;
    traverse(node.left); // Recorrer el subárbol izquierdo
    traverse(node.right); // Recorrer el subárbol derecho
    result.push(node.data); // Visitar el nodo raíz
  }

  traverse(root);
  return result;
}
