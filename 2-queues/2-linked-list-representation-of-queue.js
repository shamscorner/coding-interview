// linked list representation of queue
class QNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.front = null; // the first node
    this.rear = null; // the last node
    this.size = 0;
  }

  enqueue(value) {
    const node = new QNode(value);

    if (this.rear === null) {
      // if the queue is empty, both front and rear will point to the new node
      this.front = node;
      this.rear = node;
    } else {
      this.rear.next = node; // add the new node as the next node of the rear node
      this.rear = node; // move the rear node to the new node
    }

    this.size++;
  }

  dequeue() {
    // if empty, nothing to return
    if (this.front === null) return null;

    // we need the value to return
    const node = this.front;

    // move the front node to the next node
    this.front = this.front.next;

    // if the queue becomes empty, rear should also be null
    if (this.front === null) this.rear = null;

    this.size--;

    return node.value;
  }

  getSize() {
    return this.size;
  }

  isEmpty() {
    return this.size === 0;
  }

  peek() {
    if (this.front === null) return null;
    return this.front.value;
  }

  getRear() {
    if (this.rear === null) return null;
    return this.rear.value;
  }

  printQueue() {
    let str = "";
    let node = this.front;
    while (node !== null) {
      str += node.value + " ";
      node = node.next;
    }
    return str;
  }
}

// test
const queue = new Queue();
console.log(queue.isEmpty()); // true
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(4);
console.log(queue.printQueue()); // 1 2 3 4
queue.dequeue();
console.log(queue.printQueue()); // 2 3 4
console.log(queue.peek()); // 2
console.log(queue.getRear()); // 4
console.log(queue.getSize()); // 3
