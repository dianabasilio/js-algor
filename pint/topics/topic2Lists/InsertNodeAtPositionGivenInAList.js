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

function insertNodeAtPosition(llist, data, position) {
  const newNode = new SinglyLinkedListNode(data);

  // If inserting at the beginning (position 0)
  if (position === 0) {
    newNode.next = llist;
    return newNode;
  }

  let current = llist;
  let count = 0;
  let previous = null;

  // Traverse the list to find the insertion point
  while (current !== null && count < position) {
    previous = current; // Node before the target index
    current = current.next; // Node after the target index
    count++;
  }

  // Insert the new node
  previous.next = newNode;
  newNode.next = current;

  return llist;
}



/*
* For your reference:
*
* SinglyLinkedListNode {
*     int data;
*     SinglyLinkedListNode next;
* }
*
*/

function insertNodeAtPosition(llist, data, position) {
   // Write your code here
      // Create a new node with the given data
   let newNode = new SinglyLinkedListNode(data);
   
   // If the position is 0, insert the node at the beginning
   if (position === 0) {
       newNode.next = llist;
       return newNode;
   }
   
   // Traverse the list to find the node at (position - 1)
   let current = llist;
   for (let i = 0; i < position - 1; i++) {
       current = current.next;
   }
   
   // Insert the new node after the current node
   newNode.next = current.next;
   current.next = newNode;
   
   return llist;

}