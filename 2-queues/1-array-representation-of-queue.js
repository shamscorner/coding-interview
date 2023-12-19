// array representation of a queue
class Queue {
  constructor() {
    this.items = [];
  }

  // O(1)
  enqueue(value) {
    this.items.push(value);
  }

  // O(n)
  dequeue() {
    return this.items.shift();
  }

  // O(1)
  size() {
    return this.items.length;
  }

  // O(1)
  peek() {
    return this.items[0];
  }

  // O(1)
  rear() {
    return this.items[this.size() - 1];
  }

  // O(1)
  isEmpty() {
    return this.size() === 0;
  }

  printQueue() {
    let str = "";
    for (let i = 0; i < this.size(); i++) {
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
console.log(queue.rear()); // 4
console.log(queue.size()); // 3
