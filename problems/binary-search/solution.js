/**
 * LeetCode 704 - Binary Search
 * https://leetcode.com/problems/binary-search/
 *
 * Given a sorted array of integers nums and a target value, return the index
 * of the target if it exists; otherwise return -1.
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
export function search(nums, target) {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    const middle = Math.floor((right - left) / 2) + left;
    const curMiddle = nums[middle];
    if (curMiddle === target) {
      return middle;
    }
    if (curMiddle > target) {
      right = middle - 1;
    } else {
      left = middle + 1;
    }
  }

  return -1;
}
