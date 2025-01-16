class LinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
    };
    this.tail = this.head;
    this.length = 1;
  }
  append(value) {
    const newNode = {
      value: value,
      next: null,
    };
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this;
  }
  prepend(value) {
    const newNode = {
      value: value,
      next: null,
    };
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
    return this;
  }
  insert(index, value) {
    if (index > this.length - 1) {
      throw new Error("Index out of bound!");
    }
    if (index === 0) {
      return this.prepend(value);
    }
    if (index === this.length - 1) {
      return this.append(value);
    }

    let toInsertNode = {
      value,
      next: null,
    };
    let count = 0;
    let prev = this.head;
    let node = this.head;
    while (count !== index) {
      prev = node;
      node = node.next;
      count++;
    }

    prev.next = toInsertNode;
    toInsertNode.next = node;

    this.length++;
    return this;
  }
}

let myLinkedList = new LinkedList(10);
myLinkedList.append(5);
myLinkedList.append(16);
console.log({ LinkedList: myLinkedList.prepend(1) });
console.log({ LinkedList: myLinkedList.insert(2, 100) });
console.log({ list: myLinkedList.insert(4, 10000).tail });
