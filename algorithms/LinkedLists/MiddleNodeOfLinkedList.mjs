import ListNode from "./ListNode.mjs";

var middleNode = function (head) {
  let slow = head;
  let fast = head;
  while (fast && fast.next) {
    fast = fast.next.next;
    slow = slow.next;
  }
  return slow;
};
const tail = new ListNode(4, null);
const node3 = new ListNode(3, tail);
const node2 = new ListNode(2, node3);
const node1 = new ListNode(1, node2);
const head = new ListNode(0, node1);

console.log({ ans: middleNode(head) });
