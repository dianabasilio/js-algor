class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }
  // Method to append a node to the end of the list
  append(data) {
    const newNode = new Node(data);
    if (!this.head) {
      this.head = newNode;
      return;
    }
    let current = this.head;
    //navega hasta el final
    while (current.next) {
      current = current.next;
    }
    current.next = newNode;
  }

  // Method to prepend a node to the beginning of the list
  prepend(data) {
    const newNode = new Node(data);

    //el que le sigue de ese node será el anterior head
    newNode.next = this.head;

    //Ahora head es newNode
    this.head = newNode;
  }

  // Method to insert a node at a specific position
  insertAtPosition(data, position) {
    const newNode = new Node(data);

    //si la posición es 0, se pone al principio
    if (position === 0) {
      newNode.next = this.head;
      this.head = newNode;
      return;
    }

    let current = this.head;
    //es un contador que inicia en 0. Nos ayuda a rastrear cuántos nodos hemos recorrido.
    let count = 0;
    //s una referencia al nodo anterior al nodo current. Inicia en null porque no hay un nodo anterior al nodo cabeza al inicio.
    let previous = null;
    while (current !== null && count < position) {
      previous = current; //Node before index
      current = current.next; //Node after index
      count++;
    }

    previous.next = newNode;
    newNode.next = current;
  }

  // Método para eliminar un nodo en una posición específica
  deleteAtPosition(position) {
    if (!this.head) return;

    if (position === 0) {
      this.head = this.head.next;
      return;
    }

    let current = this.head;
    let previous = null;
    let count = 0;

    while (current && count < position) {
      previous = current;
      current = current.next;
      count++;
    }

    if (current) {
      previous.next = current.next;
    }
  }

  // Método para eliminar un nodo por valor
  deleteByValue(value) {
    if (!this.head) return;

    if (this.head.data === value) {
      this.head = this.head.next;
      return;
    }

    let current = this.head;
    while (current.next && current.next.data !== value) {
      current = current.next;
    }

    if (current.next) {
      current.next = current.next.next;
    }
  }

  // Método para buscar un nodo por valor
  find(value) {
    let current = this.head;
    while (current && current.data !== value) {
      current = current.next;
    }
    return current;
  }

  // Método para obtener el tamaño de la lista
  size() {
    let count = 0;
    let current = this.head;
    while (current) {
      count++;
      current = current.next;
    }
    return count;
  }

  // Method to print the linked list
  printList() {
    let current = this.head;

    while (current) {
      console.log(current.data);
      current = current.next;
    }
  }
}

// Example usage:
const linkedList = new LinkedList();
linkedList.append(1); // Append 1
linkedList.printList();
linkedList.append(2); // Append 2
linkedList.printList();
linkedList.append(3);
linkedList.append(4);
linkedList.append(5);

console.log("prepend");
linkedList.prepend(0); // Prepend 0
linkedList.printList();

console.log("insert");
linkedList.insertAtPosition(3, 2); // Insert 3 at position 2
linkedList.printList(); // Output: 0 -> 1 -> 3 -> 2
console.log("insert");
console.log("delete");
linkedList.deleteAtPosition(2); // Delete node at position 2
linkedList.printList(); // Output: 0 -> 1 -> 2
