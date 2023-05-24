/*

A sentence is a list of words that are separated by a single space with no leading or trailing spaces. 
Each word consists of lowercase and uppercase English letters.
A sentence can be shuffled by appending the 1-indexed word position to each word then 
rearranging the words in the sentence.
For example, the sentence "This is a sentence" can be shuffled as 
"sentence4 a3 is2 This1" or "is2 sentence4 This1 a3".
Given a shuffled sentence s containing no more than 9 words, reconstruct and 
return the original sentence.

Input: s = "is2 sentence4 This1 a3"
Output: "This is a sentence"
Explanation: Sort the words in s to their original positions "This1 is2 a3 sentence4", then remove the numbers.

*/

export const sortSentence = (s: string) => {
  return s
    .split(" ")
    .reduce((acc, curr) => {
      acc[(+curr.substring(curr.length - 1) - 1) as any] = curr.substring(
        0,
        curr.length - 1
      );
      return acc;
    }, [] as string[])
    .join(" ");
};

console.log(sortSentence("is2 sentence4 This1 a3"));
