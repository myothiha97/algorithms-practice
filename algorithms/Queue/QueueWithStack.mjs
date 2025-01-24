import { Stack } from "../Stack/Stack.mjs";
import { fileURLToPath } from "url";
import process from "process";

class QueueWithStack {
  constructor() {
    this.stack = new Stack();
    this.last = null;
  }
  peek() {
    if (this.stack.isEmpty) return null;
    return this.stack.peek();
  }
  enqueue(value) {
    this.stack.push(value);
    return this;
  }
  dequeue() {
    let curr = this.stack.top;
    let toDeQueueValue = null;
    let prev = null;

    if (!curr) {
      return toDeQueueValue;
    }

    while (curr && curr.next) {
      prev = curr;
      curr = curr.next;
    }
    toDeQueueValue = curr.val;
    if (prev) {
      prev.next = null;
    } else {
      this.stack.top = null;
    }

    return toDeQueueValue;
  }
}

// in order to prevent code from running while importing to other module
// we can use below syntax -> process.argv[1] === fileURLToPath(import.meta.url)
// NOTE: but some people from internet also mention that `import.meta.main` also work but in my case it doesn't
// lastly, there is a section from nodejs official docs (https://github.com/nodejs/node/blob/main/doc/api/modules.md#accessing-the-main-module)
// that describe `require.main === module` can also be used to determine if the current file is directly run or not
// but it only works for commonJs module system

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  const queue = new QueueWithStack();
  console.log(queue.enqueue(1));
  console.log(queue.enqueue(2));
  console.log(queue.enqueue(3));
  console.log(queue.enqueue(4));
  console.log(queue.dequeue());
  console.log(queue.dequeue());
  console.log(queue.dequeue());
  console.log(queue.dequeue());
  console.log(queue.dequeue());
}
