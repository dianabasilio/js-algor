class MaxHeap {
  constructor() {
    this.heap = [];
  }

  insert(value) {
    this.heap.push(value);
    //this.heap.length - 1 (index del último elemento, el que se hizo push)
    this.bubbleUp(this.heap.length - 1);
  }

  bubbleUp(index) {
    while (index > 0) {
      let parentIndex = Math.floor((index - 1) / 2);
      if (this.heap[index] <= this.heap[parentIndex]) break;
      [this.heap[index], this.heap[parentIndex]] = [
        this.heap[parentIndex],
        this.heap[index],
      ];
      index = parentIndex;
    }
  }

  extractMax() {
    if (this.heap.length === 1) return this.heap.pop();
    const max = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.sinkDown(0);
    return max;
  }

  sinkDown(index) {
    const length = this.heap.length;
    const element = this.heap[index];
    while (true) {
      let leftChildIndex = 2 * index + 1;
      let rightChildIndex = 2 * index + 2;
      let leftChild, rightChild;
      let swap = null;

      //este if es para checar que LeftChildIndex no se sale del array
      if (leftChildIndex < length) {
        leftChild = this.heap[leftChildIndex];
        if (leftChild > element) {
          swap = leftChildIndex;
        }
      }

      if (rightChildIndex < length) {
        rightChild = this.heap[rightChildIndex];
        if (
          (swap === null && rightChild > element) ||
          (swap !== null && rightChild > leftChild)
        ) {
          swap = rightChildIndex;
        }
      }

      //hasta que ya no tenga nada que mover sale
      if (swap === null) break;
      [this.heap[index], this.heap[swap]] = [this.heap[swap], this.heap[index]];
      index = swap;
    }
  }

  getMax() {
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
  const maxHeap = new MaxHeap();

  for (let i = 1; i < lines.length; i++) {
    const [operation, value] = lines[i].split(" ").map(Number);

    switch (operation) {
      case 1:
        maxHeap.insert(value);
        break;
      case 2:
        maxHeap.remove(value);
        break;
      case 3:
        console.log(maxHeap.getMax());
        break;
    }
  }
}
