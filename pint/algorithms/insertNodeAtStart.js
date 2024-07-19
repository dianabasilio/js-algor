// Assuming you have a SinglyLinkedListNode class defined like this:
class SinglyLinkedListNode {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

// Example linked list: 1 -> 2 -> 3
let head = new SinglyLinkedListNode(1);
head.next = new SinglyLinkedListNode(2);
head.next.next = new SinglyLinkedListNode(3);

function insertAtStart(llist, data) {
  // Create a new node with the given data
  const newNode = new SinglyLinkedListNode(data);

  // Point the new node's next to the current head
  newNode.next = llist;

  // The new node becomes the new head
  return newNode;
}
