/** Features
 * when item are pushed to the stack
 * pop the item by last in first out order
 * eg - discord , udmey, google then order will be google -> udemy -> discord
 */

class Node {
  constructor(value) {
    this.val = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.length = 0;
  }

  isEmpty() {
    return !!!this.length;
  }

  traverse(index) {
    let count = 1;
    let node = this.top;
    while (count !== index && node.next) {
      node = node.next;
      count++;
    }
    return node;
  }

  pop() {
    if (this.isEmpty()) {
      return null;
    }

    const val = this.top.val;
    this.top = this.top.next;
    this.length--;
    return val;
  }

  push(value) {
    const node = new Node(value);
    if (this.isEmpty()) {
      this.top = node;
    } else {
      node.next = this.top;
      this.top = node;
    }

    this.length++;
    return this;
  }
  peek() {
    if (this.isEmpty()) {
      return null;
    }
    return this.top.val;
  }
}

const stack = new Stack();
stack.push("discord");
stack.push("udemy");
stack.push("google");
stack.push("firefox");

console.log({ value: stack.pop() });
console.log({ value: stack.pop() });
console.log({ value: stack.pop() });
console.log({ value: stack.pop() });
console.log({ value: stack.pop() });
