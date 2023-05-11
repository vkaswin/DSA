/*

Given a function fn, return a curried version of that function.
A curried function is a function that accepts fewer or an equal number of parameters 
as the original function and returns either another curried function or the same value the 
original function would have returned.
In practical terms, if you called the original function like sum(1,2,3), you would call the 
curried version like csum(1)(2)(3), csum(1)(2,3), csum(1,2)(3), or csum(1,2,3). 
All these methods of calling the curried function should return the same value as the original.

Input: 
fn = function sum(a, b, c) { return a + b + c; }
inputs = [[1],[2],[3]]
Output: 6
Explanation:
The code being executed is:
const curriedSum = curry(fn);
curriedSum(1)(2)(3) === 6;
curriedSum(1)(2)(3) should return the same value as sum(1, 2, 3).

Input:
fn = function sum(a, b, c) { return a + b + c; }
inputs = [[1,2],[3]]
Output: 6
Explanation:
curriedSum(1, 2)(3) should return the same value as sum(1, 2, 3).

*/

let curring = (a: number) => (b: number) => (c: number) => a + b + c;
let sum = curring(1)(1)(1);
console.log(sum);

const curry = (fn: Function) => {
  return () => {};
};
