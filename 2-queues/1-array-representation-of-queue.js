// array representation of a queue
class Queue {
  constructor() {
    this.items = [];
  }

  enqueue(value) {
    this.items.push(value);
  }

  dequeue() {
    return this.items.shift();
  }

  peek() {
    return this.items[0];
  }

  isEmpty() {
    return this.items.length === 0;
  }

  printQueue() {
    let str = "";
    for (let i = 0; i < this.items.length; i++) {
      str += this.items[i] + " ";
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
