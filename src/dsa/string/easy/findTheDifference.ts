/*

You are given two strings s and t.

String t is generated by random shuffling string s and then add one more letter at a random position.

Return the letter that was added to t.

Input: s = "abcd", t = "abcde"
Output: "e"
Explanation: 'e' is the letter that was added.

*/

export const findTheDifference = (s: string, t: string) => {
  let freq1: Record<string, number> = {};
  let freq2: Record<string, number> = {};

  for (let char of s) {
    freq1[char] = (freq1[char] || 0) + 1;
  }

  for (let char of t) {
    freq2[char] = (freq2[char] || 0) + 1;
  }

  for (let key in freq2) {
    if (!freq1[key] || freq2[key] > freq1[key]) return key;
  }
};

console.log(findTheDifference("abcd", "abcde"));
