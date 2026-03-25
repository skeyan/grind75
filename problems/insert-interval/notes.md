# Insert Interval

**Difficulty:** Medium  
**Topics:** Array, Sorting  
**LeetCode:** [57. Insert Interval](https://leetcode.com/problems/insert-interval/)

## Problem

You are given an array of non-overlapping intervals `intervals` (sorted by start) and a `newInterval`. Insert `newInterval` and merge any overlapping intervals. Return the intervals in sorted order.

## Approach: Single Pass — Three Cases

The loop handles three mutually exclusive cases for each `cur` interval:

1. **cur before** (`cur[1] < newStart`) — no overlap, push `cur` and continue
2. **cur after** (`cur[0] > newEnd`) — no overlap, push merged `[newStart, newEnd]`, spread the rest, early return
3. **Overlap** — expand `newStart`/`newEnd` in place and continue

### Why the overlap case "just works"

`newStart` and `newEnd` act as a living, expanding interval. Each merge grows the boundaries, so the next iteration checks against the latest values — not the original ones. This absorbs chains of overlapping intervals without nested loops.

### Why the final push is unconditional

If the loop ends without early return, `[newStart, newEnd]` was never pushed. Every branch either pushes `cur`, returns early, or only updates boundaries. So the final push covers both: no overlaps (interval at end) or merged with one/more intervals (merged result at end).

- **Time Complexity:** O(n) - Single pass over `intervals` (n is number of intervals).
- **Space Complexity:** O(n) - Output array can hold up to n merged intervals.

## Gotchas

- Use `...intervals.slice(i)` to append remaining intervals, not `[intervals.slice(i)]` — spread flattens, wrapping in `[]` nests them
- JS has no negative indexing (`arr[-1]` is `undefined`) — use `arr[arr.length - 1]`
- IMPORTANT: Update `newStart`/`newEnd` in place rather than a separate merged variable — the if/else naturally re-checks expanded boundaries each iteration
