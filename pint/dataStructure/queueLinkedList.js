class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.front = null;
    this.rear = null;
    this.length = 0;
  }

  // Add an element to the end of the queue
  enqueue(value) {
    const newNode = new Node(value);
    if (this.isEmpty()) {
      this.front = newNode;
    } else {
      this.rear.next = newNode;
    }
    this.rear = newNode;
    this.length++;
  }

  // Remove and return the front element from the queue
  dequeue() {
    if (this.isEmpty()) {
      return "Queue is empty";
    }
    const dequeuedNode = this.front;
    this.front = this.front.next;
    if (this.front === null) {
      this.rear = null;
    }
    this.length--;
    return dequeuedNode.value;
  }

  // Return the front element without removing it
  peek() {
    if (this.isEmpty()) {
      return "Queue is empty";
    }
    return this.front.value;
  }

  // Check if the queue is empty
  isEmpty() {
    return this.length === 0;
  }

  // Return the size of the queue
  size() {
    return this.length;
  }

  // Print the queue elements
  print() {
    let current = this.front;
    let result = "";
    while (current) {
      result += current.value + " ";
      current = current.next;
    }
    console.log(result.trim());
  }
}

// Example usage:
const queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
console.log(queue.dequeue()); // Output: 1
queue.print(); // Output: 2 3
