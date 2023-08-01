/*

You are given the head of a linked list, which contains a series of integers separated by 0's. The beginning and end of the linked list will have Node.val == 0.

For every two consecutive 0's, merge all the nodes lying in between them into a single node whose value is the sum of all the merged nodes. The modified list should not contain any 0's.

Return the head of the modified linked list.

Input: head = [0,3,1,0,4,5,2,0]
Output: [4,11]
Explanation: 
The above figure represents the given linked list. The modified list contains
- The sum of the nodes marked in green: 3 + 1 = 4.
- The sum of the nodes marked in red: 4 + 5 + 2 = 11.

*/
import { IListNode, buildLinkedList } from "../list";

export const mergeNodes = (head: IListNode | null) => {
  if (!head) return null;

  let curr = head.next;
  let prev = head;
  let sum = 0;

  while (curr) {
    if (curr.val === 0 && sum !== 0) {
      curr.val = sum;
      sum = 0;
      prev = curr;
      curr = curr.next;
    } else {
      sum += curr.val;
      prev.next = curr.next;
      curr = curr.next;
    }
  }

  return head.next;
};

let head = buildLinkedList([0, 1, 0, 3, 0, 2, 2, 0]);
console.log(mergeNodes(head));
