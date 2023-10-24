/*

You are given an integer array nums that is sorted in non-decreasing order.

Determine if it is possible to split nums into one or more subsequences such that both of the following conditions are true:

Each subsequence is a consecutive increasing sequence (i.e. each integer is exactly one more than the previous integer).
All subsequences have a length of 3 or more.
Return true if you can split nums according to the above conditions, or false otherwise.

A subsequence of an array is a new array that is formed from the original array by deleting some (can be none) of the elements without disturbing the relative positions of the remaining elements. (i.e., [1,3,5] is a subsequence of [1,2,3,4,5] while [1,3,2] is not).

Input: nums = [1,2,3,3,4,5]
Output: true
Explanation: nums can be split into the following subsequences:
[1,2,3,3,4,5] --> 1, 2, 3
[1,2,3,3,4,5] --> 3, 4, 5

*/

export const isPossible = (nums: number[]) => {
  let freq = new Map();

  for (let num of nums) {
    freq.set(num, (freq.get(num) || 0) + 1);
  }

  for (let num of nums) {
    if (!freq.has(num)) continue;

    let len = 0;

    while (freq.has(num)) {
      len++;
      freq.set(num, freq.get(num) - 1);
      if (freq.get(num) === 0) freq.delete(num);
      num++;
    }

    if (len < 3) return false;
  }

  return true;
};

console.log(isPossible([1, 2, 3, 3, 4, 5]));
