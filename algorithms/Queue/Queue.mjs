/** Queue - First In First Last out
 * we can use queue data structure in scenario like when we need to buy ticket for a movie
 * we need queue, and first one that get in , first one get the ticket soonest
 *
 */

export class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }
  peek() {
    return this?.first?.value ?? null;
  }
  enqueue(value) {
    const node = new Node(value);
    if (!this.first) {
      this.first = node;
      this.first.next = this.last;
      this.last = node;
      return this;
    }
    let lastNode = this.last;
    lastNode.next = node;
    this.last = node;
    return this;
  }
  dequeue() {
    if (!this.first) return null;
    let toDeQueueValue = this.first.value;
    this.first = this.first.next;
    return toDeQueueValue;
  }
  //isEmpty;
}

if (import.meta.main) {
  const myQueue = new Queue();
  myQueue.enqueue("john");
  myQueue.enqueue("thomas");
  myQueue.enqueue("kite");
  console.log(myQueue.enqueue("lenny"));
  console.log({ first: myQueue.peek() });
  console.log({ value: myQueue.dequeue() });
  console.log({ value: myQueue.dequeue() });
  console.log({ value: myQueue.dequeue() });
  console.log({ value: myQueue.dequeue() });
  console.log({ value: myQueue.dequeue() });
  console.log({ first: myQueue.peek() });
}

//Joy
//Matt
//Pavel
//Samir
