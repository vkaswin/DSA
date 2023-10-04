/*

You are given the root of a binary tree with n nodes. Each node is assigned a unique value from 1 to n. You are also given an array queries of size m.

You have to perform m independent queries on the tree where in the ith query you do the following:

Remove the subtree rooted at the node with the value queries[i] from the tree. It is guaranteed that queries[i] will not be equal to the value of the root.
Return an array answer of size m where answer[i] is the height of the tree after performing the ith query.

Note:

The queries are independent, so the tree returns to its initial state after each query.
The height of a tree is the number of edges in the longest simple path from the root to some node in the tree.

Input: root = [5,8,9,2,1,3,7,4,6], queries = [3,2,4,8]
Output: [3,2,3,2]
Explanation: We have the following queries:
- Removing the subtree rooted at node with value 3. The height of the tree becomes 3 (The path 5 -> 8 -> 2 -> 4).
- Removing the subtree rooted at node with value 2. The height of the tree becomes 2 (The path 5 -> 8 -> 1).
- Removing the subtree rooted at node with value 4. The height of the tree becomes 3 (The path 5 -> 8 -> 2 -> 6).
- Removing the subtree rooted at node with value 8. The height of the tree becomes 2 (The path 5 -> 9 -> 3).

*/

import { ITreeNode } from "../tree";

function treeQueries(root: ITreeNode | null, queries: number[]) {
  let result: number[] = [];

  let dfs = (root: ITreeNode | null) => {
    console.log(root);
  };

  dfs(root);
}

let root: ITreeNode = {
  val: 5,
  left: {
    val: 8,
    left: {
      val: 2,
      left: { val: 4, left: null, right: null },
      right: { val: 6, left: null, right: null },
    },
    right: { val: 1, left: null, right: null },
  },
  right: {
    val: 9,
    left: { val: 3, right: null, left: null },
    right: { val: 7, right: null, left: null },
  },
};

console.log(treeQueries(root, [3, 2, 4, 8]));
