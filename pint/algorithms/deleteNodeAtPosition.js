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

function deleteNodeAtPosition(llist, position) {
  // If the list is empty or position is invalid
  if (llist === null || position < 0) {
    return llist;
  }

  // If the node to be deleted is the head node
  if (position === 0) {
    return llist.next;
  }

  let current = llist;
  let count = 0;
  let previous = null;

  // Traverse the list to find the node just before the one to be deleted
  while (current !== null && count < position) {
    previous = current;
    current = current.next;
    count++;
  }

  // If the position is greater than the number of nodes
  if (current === null) {
    return llist;
  }

  // Remove the node
  previous.next = current.next;

  return llist;
}
