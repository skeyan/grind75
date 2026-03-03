/**
 * LeetCode 1 - Two Sum
 * https://leetcode.com/problems/two-sum/
 *
 * Given an array of integers nums and an integer target,
 * return indices of the two numbers that add up to target.
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @returns {number[]}
 */
export function twoSum(nums, target) {
  const seen = new Map();

  for (let i = 0; i < nums.length; i++) {
    const current = nums[i];
    const diff = target - current;
    if (seen.has(diff)) {
      return [seen.get(diff), i];
    }
    seen.set(current, i);
  }

  return [];
}
