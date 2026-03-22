/**
 * LeetCode 53 - Maximum Subarray
 * https://leetcode.com/problems/maximum-subarray/
 *
 * Given an integer array nums, find the contiguous subarray with the largest sum and return its sum.
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
export function maxSubArray(nums) {
  let curSum = nums[0];
  let maxSum = nums[0];

  for (let i = 1; i < nums.length; i++) {
    const cur = nums[i];

    if (curSum < 0) {
      curSum = cur;
    } else {
      curSum += cur;
    }

    maxSum = Math.max(curSum, maxSum);
  }

  return maxSum;
}
