import ListNode from "./ListNode.mjs";

/** Given the head of a linked list, swap every pair of nodes.
 * For example, given a linked list 1 -> 2 -> 3 -> 4 -> 5 -> 6,
 *  return a linked list 2 -> 1 -> 4 -> 3 -> 6 -> 5.
 * */

const swapNodesInPairs = (head) => {
  let curr = head;
  let nextNode = curr.next;
  curr.next = curr;
  curr = nextNode;
  return curr;
};

const tail = new ListNode(2, null);
const head = new ListNode(1, tail);

console.log({ ans: swapNodesInPairs(head) });
