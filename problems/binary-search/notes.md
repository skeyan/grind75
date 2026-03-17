# Binary Search

**Difficulty:** Easy  
**Topics:** Array, Binary Search  
**LeetCode:** [704. Binary Search](https://leetcode.com/problems/binary-search/)

## Problem

Given a sorted array of integers `nums` and a target value, return the index of the target if it exists; otherwise return `-1`. You must use \(O(\log n)\) runtime complexity.

## Approach: Classic Binary Search

At every step, `[left, right]` represents the range where the target could still be. Each iteration, you calculate the middle of that range and compare it to the target — ruling out half the remaining elements each time. You keep narrowing until you either find the target or exhaust all candidates.

### Key fixes we worked through

- **middle** must be `left + Math.floor((right - left) / 2)` — anchored to the current window, not the whole array.
- When middle is too big, shrink **right**; when too small, raise **left**.
- Use `middle + 1` / `middle - 1` to actually advance the pointers (otherwise you can get stuck).
- Loop condition is **`left <= right`** — so you don't skip the last remaining candidate.

### Solution

```javascript
var search = function(nums, target) {
    let left = 0;
    let right = nums.length - 1;

    while (left <= right) {
        const middle = Math.floor((right - left) / 2) + left;
        const curMiddle = nums[middle];
        if (curMiddle === target) {
            return middle;
        } else if (curMiddle > target) {
            right = middle - 1;
        } else if (curMiddle < target) {
            left = middle + 1;
        }
    }

    return -1;
};
```

**Complexity:** O(log n) time, O(1) space — you're halving the search space each iteration.

## Key Insights

- The invariant: at each step, the target (if present) is in `[left, right]`. When `left > right`, the range is empty and you return `-1`.
- Using `left + Math.floor((right - left) / 2)` avoids overflow and keeps `middle` inside the current window.
- Always move one past `middle` when excluding it (`middle - 1` or `middle + 1`) so the range shrinks every time.

## Practice Notes

- Loop condition: `left <= right` (not `<`) so the single-element / last-candidate case is checked.
- Update bounds with `middle ± 1` so the search always progresses.
