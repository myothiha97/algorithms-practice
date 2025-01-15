import ListNode from "./ListNode.mjs";

/** Given the head of a linked list, swap every pair of nodes.
 * For example, given a linked list 1 -> 2 -> 3 -> 4 -> 5 -> 6,
 *  return a linked list 2 -> 1 -> 4 -> 3 -> 6 -> 5.
 * */

const swapNodesInPairs = (head) => {
  if (!head || !head.next) {
    return head;
  }
  let prev = null;
  let dummyNode = head.next;
  while (head && head.next) {
    if (prev) {
      prev.next = head.next;
    }
    let nextNode = head.next.next;
    head.next.next = head;
    prev = head;
    head.next = nextNode;
    head = nextNode;
  }
  return dummyNode;
};

let node6 = new ListNode(6, null);
let node5 = new ListNode(5, node6);
let node4 = new ListNode(4, node5);
let node3 = new ListNode(3, node4);
let node2 = new ListNode(2, node3);
let head = new ListNode(1, node2);

console.log({ ans: swapNodesInPairs(head) });
