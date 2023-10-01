/*

Given a wooden stick of length n units. The stick is labelled from 0 to n. For example, a stick of length 6 is labelled as follows:

Given an integer array cuts where cuts[i] denotes a position you should perform a cut at.

You should perform the cuts in order, you can change the order of the cuts as you wish.

The cost of one cut is the length of the stick to be cut, the total cost is the sum of costs of all cuts. When you cut a stick, it will be split into two smaller sticks (i.e. the sum of their lengths is the length of the stick before the cut). Please refer to the first example for a better explanation.

Return the minimum total cost of the cuts.

Input: n = 7, cuts = [1,3,4,5]
Output: 16
Explanation: Using cuts order = [1, 3, 4, 5] as in the input leads to the following scenario:

The first cut is done to a rod of length 7 so the cost is 7. The second cut is done to a rod of length 6 (i.e. the second part of the first cut), the third is done to a rod of length 4 and the last cut is to a rod of length 3. The total cost is 7 + 6 + 4 + 3 = 20.
Rearranging the cuts to be [3, 5, 1, 4] for example will lead to a scenario with total cost = 16 (as shown in the example photo 7 + 4 + 3 + 2 = 16).

*/

export const minCost = (n: number, cuts: number[]) => {
  let cache: Record<string, number> = {};

  let recurse = (left: number, right: number) => {
    let key = `${left},${right}`;

    if (right - left === 1) return 0;

    if (key in cache) return cache[key];

    let min = Infinity;

    for (let cut of cuts) {
      if (cut > left && cut < right) {
        min = Math.min(
          min,
          right - left + recurse(left, cut) + recurse(cut, right)
        );
      }
    }

    return (cache[key] = min === Infinity ? 0 : min);
  };

  return recurse(0, n);
};

console.log(minCost(7, [1, 3, 4, 5]));