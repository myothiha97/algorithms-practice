import ListNode from "./ListNode.mjs";

/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function (head, left, right) {
  if (!head || left === right) return head; // Edge case: empty list or no reversal needed

  // Dummy node to simplify edge case handling for left = 1
  let dummy = new ListNode(0);
  dummy.next = head;
  let prev = dummy;

  // Move `prev` to the node before `left`
  for (let i = 1; i < left; i++) {
    prev = prev.next;
  }

  // `curr` is the first node in the sublist to be reversed
  let curr = prev.next;

  // Reverse the sublist from left to right
  for (let i = 0; i < right - left; i++) {
    let temp = curr.next;
    curr.next = temp.next; // Remove temp from the list
    temp.next = prev.next; // Insert temp at the start of the reversed sublist
    prev.next = temp; // Update the start of the reversed sublist
  }

  return dummy.next;
};

// Helper function to create a linked list for testing
function createLinkedList(arr) {
  let dummy = new ListNode(0);
  let curr = dummy;
  for (let val of arr) {
    curr.next = new ListNode(val);
    curr = curr.next;
  }
  return dummy.next;
}

// Helper function to convert linked list to array (for debugging)
function linkedListToArray(head) {
  let result = [];
  while (head) {
    result.push(head.val);
    head = head.next;
  }
  return result;
}

// Test the function
const head = createLinkedList([1, 2, 3, 4, 5, 6]);
console.log(linkedListToArray(reverseBetween(head, 2, 4))); // Output: [1, 4, 3, 2, 5, 6]
