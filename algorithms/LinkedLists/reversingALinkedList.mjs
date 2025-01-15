import ListNode from "./ListNode.mjs";

let reverseList = (head) => {
  let prev = null;
  let curr = head;

  while (curr) {
    let nextNode = curr.next;
    curr.next = prev;
    prev = curr;
    curr = nextNode;
  }
  return prev;
};

/** LinkedList
 * original condition - 1 -> 2 -> 3 -> 4 -> null
 * target condition - null <- 1 <- 2 <- 3 <- 4
 */

const reverseListRecursive = (head) => {
  let curr = head;
  let prev = null;
  if (!curr && !curr?.next) {
    return prev;
  }
  let nextNode = curr.next;

  // pointer switch
  curr.next = reverseListRecursive(nextNode);
  // switch position
  // prev = curr;
  prev = curr;
  return prev;
};

let node4 = new ListNode(4, null);
let node3 = new ListNode(3, node4);
let node2 = new ListNode(2, node3);
let head = new ListNode(1, node2);

console.log({ ans: reverseListRecursive(head) });
