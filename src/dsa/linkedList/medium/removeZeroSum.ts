/*

Given the head of a linked list, we repeatedly delete consecutive sequences of nodes that sum to 0 until there are no such sequences.
After doing so, return the head of the final linked list.  You may return any such answer.
(Note that in the examples below, all sequences are serializations of ListNode objects.)

Input: head = [1,2,-3,3,1]
Output: [3,1]
Note: The answer [1,2,1] would also be accepted.

*/

import { IListNode, ListNode, buildLinkedList } from "../list";

export const removeZeroSumSublists = (head: IListNode | null) => {
  if (!head) return null;

  head = new ListNode(0, head);

  return head.next;
};

let list = buildLinkedList([1, 2, -3, 3, 1]);
console.log(removeZeroSumSublists(list));
