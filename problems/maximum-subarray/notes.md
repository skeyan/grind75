# Maximum Subarray

**Difficulty:** Medium  
**Topics:** Array, Dynamic Programming, Divide and Conquer  
**LeetCode:** [53. Maximum Subarray](https://leetcode.com/problems/maximum-subarray/)

## Problem

Given an integer array `nums`, find the **contiguous** subarray (containing at least one number) which has the largest sum and return **that sum**.

## Approach: Kadane's Algorithm (DP)

- **Brute force** checks every subarray — \(O(n^2)\) or worse. DP avoids that by making a **locally optimal** choice at each index.
- A **negative running sum** drags down every extension after it, so **resetting** the running sum to the current element is the rational move when the current running sum is negative. It's always better to reset than have a negative dragging us down. Very
- **Subproblem:** “What is the best sum of a subarray **ending** at index \(i\)?” — it depends only on the answer at \(i - 1\), not on earlier history. We rely on our running sum which is continually updated or reset to figure this out.
- Track two scalars: **`curSum`** (extend the previous subarray or start fresh at `nums[i]`) and **`maxSum`** (global best seen so far).

- **Time Complexity:** \(O(n)\) — one pass  
- **Space Complexity:** \(O(1)\) — only two variables; no need to store the subarray itself for the sum-only answer

## Key Insights

- We could rewrite it as `curSum = max(nums[i], curSum + nums[i])`; the explicit “if negative, reset” form matches the intuition about dropping harmful numbers.
- You do not need indices of the best subarray in this particular LC problem.

## Practice Notes

- _Add your own notes here: edge cases, gotchas, divide-and-conquer variant..._
