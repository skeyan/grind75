# Flood Fill

**Difficulty:** Easy  
**Topics:** Array, BFS, DFS, Matrix  
**LeetCode:** [733. Flood Fill](https://leetcode.com/problems/flood-fill/)

## Problem

Given an `image` (2D array of integers), a starting pixel `(sr, sc)`, and a `color`, perform a flood fill: change the starting pixel and all 4-directionally connected pixels that have the same color as the starting pixel to the new color. Return the modified image.

### Definitions / rules

- **Flood fill** spreads through a connected region of uniform color (the original color at `(sr, sc)`). Only pixels that match this original color are filled.
- **4-directionally connected** means up, down, left, right (no diagonals).

### Input / output

- **Input:** `image` (m×n grid), `sr` (row), `sc` (column), `color` (new value). All values in `image` and `color` are in `[0, 65535]`.
- **Output:** The same image matrix with the flood-filled region updated (in-place is allowed; return the image).
- **Constraints:** `m, n >= 1`; `sr` and `sc` are valid indices.

## Approach: Iterative BFS using a queue

Start from `(sr, sc)`, record the original color, and BFS: for each cell, set it to the new color and enqueue valid neighbors. A neighbor is valid if it’s in bounds and has the same value as the `originalColor`. No separate visited set is needed: we mutate the grid when we process a cell (set it to `color`), so when that cell is later considered as a neighbor of another pixel, `image[i][j]` is no longer `originalColor` (we know `originalColor !== color` at this point due to an early return), so it isn't part of the floodfill anymore and `isValid` returns false.

### Key details / gotchas

- **Early return when `originalColor === color`:** Required for correctness. Without it, filled pixels would still match `originalColor`, so they’d be re-enqueued and you’d get an infinite loop.
- **Check against `originalColor`, not `color`:** The region to fill is “everything connected with the same color as the start.” Checking `curColor !== color` would incorrectly include any pixel that isn’t the target color.
- **Validation in `isValid`:** Doing in-bounds and `image[i][j] === originalColor` in a helper keeps the queue free of invalid cells and simplifies the loop (no need for a redundant check after dequeue).

- **Time Complexity:** O(m×n) - Each pixel is enqueued at most once in the worst case (m×n grid).
- **Space Complexity:** O(m×n) - Queue can hold many cells when the region spans the whole image.

## Key Insights

- Three conditions before enqueuing a neighbor: 
    - In bounds
    - Matches `originalColor`
    - Not already visited. This one is implicit: we don't use a manual visited set because we overwrite each pixel with `color` as soon as we process it. After that, that cell's value is `color`, so for any future check `image[i][j] === originalColor` is false and we never enqueue it again since it's no longer the same as the OG color and doesn't qualify to be part of the "flood" anymore. The grid itself acts as the visited marker -"filled" and "not originalColor" are the same thing.
- Moving the color check into `isValid` filters bad neighbors before they enter the queue, so the dequeue-time check can be dropped and the loop body stays simple.
- DFS (stack or recursion) is equivalent in time/space; BFS is a clear way to express “spread from start.”

## Practice Notes

- Remember the early return for `originalColor === color` when reimplementing.
- Same pattern applies to “connected component” or “paint bucket” style problems.
