import ListNode from "./ListNode.mjs";

const tail = new ListNode(3, null);
const node3 = new ListNode(3, tail);
const node2 = new ListNode(2, node3);
const node1 = new ListNode(1, node2);
const head = new ListNode(1, node1);

/** What i know ?
 *  head,head.next
 *  two pointes -> slow one (Move one node at a time) and faster one (Move two or N amount of node a time ),
 *  with two pointers , we can -> get the middle node, get nth node from last node,
 *  tail, tail.next
 */

/** the problem
 *  given a `sorted` linked list -> 1,1,2,3,4,4
 *  remove duplicate, and returned a new version of linkedList -> 1,2,3,4
 */

var deleteDuplicates = function (head) {
  let curr = head;

  while (curr && curr.next) {
    if (curr.next.val === curr.val) {
      curr.next = curr.next.next;
    } else {
      curr = curr.next;
    }
  }
  return head; // this is where the trick is, instead of returning the null, we should return the head, the modified version after we do certain operation
};
console.log({ ans: deleteDuplicates(head.next.next) });
