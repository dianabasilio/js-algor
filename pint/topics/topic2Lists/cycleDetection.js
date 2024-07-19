// Definition for singly-linked list.
class SinglyLinkedListNode {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

/**
 * Determines if a linked list contains a cycle.
 *
 * @param {SinglyLinkedListNode} head - A reference to the head of the list.
 * @return {number} - 1 if there is a cycle, otherwise 0.
 */
function has_cycle(head) {
  if (head === null) return 0;

  let slow = head;
  let fast = head;

  //fast !== null && fast.next !== null cuando esto es null ahí se acaba

  while (fast !== null && fast.next !== null) {
    slow = slow.next; // Move slow pointer one step
    fast = fast.next.next; // Move fast pointer two steps

    if (slow === fast) {
      return 1; // Cycle detected
    }
  }

  return 0; // No cycle
}

// Example usage:
let head = new SinglyLinkedListNode(1);
head.next = new SinglyLinkedListNode(2);
head.next.next = new SinglyLinkedListNode(3);
head.next.next.next = new SinglyLinkedListNode(4);
head.next.next.next.next = head.next; // Creates a cycle

console.log(has_cycle(head)); // Output: 1

let head2 = new SinglyLinkedListNode(1);
head2.next = new SinglyLinkedListNode(2);
head2.next.next = new SinglyLinkedListNode(3);
head2.next.next.next = new SinglyLinkedListNode(4);

console.log(has_cycle(head2)); // Output: 0
