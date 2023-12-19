// Javascript implementation of Deque using doubly linked list
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class Deque {
  constructor() {
    this.front = null;
    this.rear = null;
    this.size = 0;
  }

  // O(1)
  enqueueFront(value) {
    const node = new Node(value);

    if (this.front === null) {
      this.front = node;
      this.rear = node;
    } else {
      node.next = this.front;
      this.front.prev = node;
      this.front = node;
    }

    this.size++;
  }

  // O(1)
  enqueueRear(value) {
    const node = new Node(value);

    if (this.rear === null) {
      this.front = node;
      this.rear = node;
    } else {
      node.prev = this.rear;
      this.rear.next = node;
      this.rear = node;
    }

    this.size++;
  }

  // O(1)
  dequeueFront() {
    if (this.front === null) return null;

    const node = this.front;

    this.front = this.front.next;

    if (this.front === null) this.rear = null;

    this.size--;

    return node.value;
  }

  // O(1)
  dequeueRear() {
    if (this.rear === null) return null;

    const node = this.rear;

    this.rear = this.rear.prev;

    if (this.rear === null) this.front = null;

    this.size--;

    return node.value;
  }

  // O(1)
  getSize() {
    return this.size;
  }

  // O(1)
  isEmpty() {
    return this.size === 0;
  }

  printDeque() {
    let curr = this.front;
    let str = "";

    while (curr !== null) {
      str += curr.value + " ";
      curr = curr.next;
    }

    return str;
  }
}

// test
const deque = new Deque();
console.log(deque.getSize()); // 0
console.log(deque.isEmpty()); // true
deque.enqueueFront(1);
deque.enqueueFront(2);
deque.enqueueFront(3);
deque.enqueueFront(4);
console.log(deque.printDeque()); // 4 3 2 1
console.log(deque.getSize()); // 4
console.log(deque.isEmpty()); // false
console.log(deque.dequeueFront()); // 4
console.log(deque.dequeueFront()); // 3
console.log(deque.dequeueFront()); // 2
console.log(deque.dequeueFront()); // 1
console.log(deque.dequeueFront()); // null
console.log(deque.printDeque()); // ""
console.log(deque.getSize()); // 0
console.log(deque.isEmpty()); // true
deque.enqueueRear(1);
deque.enqueueRear(2);
deque.enqueueRear(3);
deque.enqueueRear(4);
console.log(deque.printDeque()); // 1 2 3 4
console.log(deque.getSize()); // 4
console.log(deque.isEmpty()); // false
console.log(deque.dequeueRear()); // 4
console.log(deque.dequeueRear()); // 3
console.log(deque.dequeueRear()); // 2
console.log(deque.dequeueRear()); // 1
console.log(deque.dequeueRear()); // null
console.log(deque.getSize()); // 0
console.log(deque.isEmpty()); // true
