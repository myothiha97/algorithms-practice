import ListNode from "./ListNode.mjs";
import { middleNode } from "./MiddleNodeOfLinkedList.mjs";
import { reverseList } from "./reversingALinkedList.mjs";

const getMaxTwinSumOfLinkedList = (head) => {
  const middleOfTheList = middleNode(head);
  const reversedList = reverseList(middleOfTheList);

  let firstNode = head;
  let secondNode = reversedList;

  let ans = Number.MIN_VALUE;
  while (secondNode) {
    let sum = secondNode.val + firstNode.val;
    ans = Math.max(ans, sum);
    secondNode = secondNode.next;
    firstNode = firstNode.next;
  }
  return ans;
};

const tail = new ListNode(5, null);
const node4 = new ListNode(4, tail);
const node3 = new ListNode(3, node4);
const node2 = new ListNode(2, tail);
const node1 = new ListNode(1, node2);
const head = new ListNode(0, node1);

console.log({ ans: getMaxTwinSumOfLinkedList(head) });
