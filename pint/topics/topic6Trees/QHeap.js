class MinHeap {
  constructor() {
    this.heap = [];
  }

  insert(value) {
    this.heap.push(value);
    this.bubbleUp(this.heap.length - 1);
  }

  bubbleUp(index) {
    while (index > 0) {
      let parentIndex = Math.floor((index - 1) / 2);
      if (this.heap[index] >= this.heap[parentIndex]) break;
      [this.heap[index], this.heap[parentIndex]] = [
        this.heap[parentIndex],
        this.heap[index],
      ];
      index = parentIndex;
    }
  }

  extractMin() {
    if (this.heap.length === 1) return this.heap.pop();
    const min = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.sinkDown(0);
    return min;
  }

  sinkDown(index) {
    const length = this.heap.length;
    const element = this.heap[index];
    while (true) {
      let leftChildIndex = 2 * index + 1;
      let rightChildIndex = 2 * index + 2;
      let leftChild, rightChild;
      let swap = null;

      if (leftChildIndex < length) {
        leftChild = this.heap[leftChildIndex];
        if (leftChild < element) {
          swap = leftChildIndex;
        }
      }

      if (rightChildIndex < length) {
        rightChild = this.heap[rightChildIndex];
        if (
          (swap === null && rightChild < element) ||
          (swap !== null && rightChild < leftChild)
        ) {
          swap = rightChildIndex;
        }
      }

      if (swap === null) break;
      [this.heap[index], this.heap[swap]] = [this.heap[swap], this.heap[index]];
      index = swap;
    }
  }

  getMin() {
    return this.heap[0];
  }

  remove(value) {
    const index = this.heap.indexOf(value);
    if (index === -1) return;
    if (index === this.heap.length - 1) {
      this.heap.pop();
      return;
    }
    this.heap[index] = this.heap.pop();
    this.bubbleUp(index);
    this.sinkDown(index);
  }
}

function processData(input) {
  const lines = input.split("\n");
  const minHeap = new MinHeap();

  for (let i = 1; i < lines.length; i++) {
    const [operation, value] = lines[i].split(" ").map(Number);

    switch (operation) {
      case 1:
        minHeap.insert(value);
        break;
      case 2:
        minHeap.remove(value);
        break;
      case 3:
        console.log(minHeap.getMin());
        break;
    }
  }
}
