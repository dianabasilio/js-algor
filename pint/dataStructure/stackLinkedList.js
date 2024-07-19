class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.length = 0;
  }

  // Add an element to the top of the stack
  push(value) {
    const newNode = new Node(value);
    newNode.next = this.top;
    this.top = newNode;
    this.length++;
  }

  // Remove and return the top element from the stack
  pop() {
    if (this.isEmpty()) {
      return "Stack is empty";
    }
    const poppedNode = this.top;
    this.top = this.top.next;
    this.length--;
    return poppedNode.value;
  }

  // Return the top element without removing it
  peek() {
    if (this.isEmpty()) {
      return "Stack is empty";
    }
    return this.top.value;
  }

  // Check if the stack is empty
  isEmpty() {
    return this.length === 0;
  }

  // Return the size of the stack
  size() {
    return this.length;
  }

  // Print the stack elements
  print() {
    let current = this.top;
    let result = "";
    while (current) {
      result += current.value + " ";
      current = current.next;
    }
    console.log(result.trim());
  }
}

// Example usage:
const stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
console.log(stack.pop()); // Output: 3
stack.print(); // Output: 2 1
