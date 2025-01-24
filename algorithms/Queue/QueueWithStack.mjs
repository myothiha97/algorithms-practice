import { Stack } from "../Stack/Stack.mjs";
import { fileURLToPath } from "url";
import process from "process";

class QueueWithStack {
  constructor() {
    this.s1 = new Stack(); // to keep track of all the values that enqueue(push) to the queue
    this.s2 = new Stack(); // this is the one we gonna dequeue(pop) from
  }
  peek() {
    if (this.s1.isEmpty()) {
      return null;
    }
    return this.s2.push(this.s1.pop()).top.val;
  }
  enqueue(value) {
    this.s1.push(value);
    // return this;
  }
  dequeue() {
    /** The implementation steps
     * before doing the action we need to check if there is any item in s1 or s2, otherwise return null
     * first if there are items in s1 , we pop all values to s2, else we skip this step
     * then we just pop from s2
     *
     */

    // the time complexity for this function is amortize O(1) since we only need to loop once
    if (!this.s2.isEmpty() || !this.s1.isEmpty()) {
      while (!this.s1.isEmpty()) {
        this.s2.push(this.s1.pop());
      }
      return this.s2.pop();
    } else {
      return null;
    }
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
