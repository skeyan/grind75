# 01 Matrix

**Difficulty:** Medium  
**Topics:** Array, Dynamic Programming, Breadth-First Search, Matrix  
**LeetCode:** [542. 01 Matrix](https://leetcode.com/problems/01-matrix/)

## Problem

Given a binary matrix `mat` (cells are `0` or `1`), return a matrix of the same size where each cell is the **distance to the nearest `0`** (4-directional moves only). There is at least one `0` in `mat`.

## Approach: Multi-source BFS

Treat every `0` as BFS layer 0. Enqueue all `0`s with distance `0`; keep a `distanceMap` with `-1` for unvisited `1`s. Dequeue, relax each neighbor still at `-1` to `current + 1`, enqueue it. One pass over the grid: **O(m×n)** instead of per-cell “find nearest 0” **O((m×n)²)**.

**Why first visit = shortest distance:** BFS expands by increasing distance. All sources start at layer 0; each edge adds 1. A longer path would reach the same cell in a later layer, so the first time a cell is set, it is optimal.

**Complexity:** 
- O(m×n) time — each cell enters the queue at most once. 
- O(m×n) space — distance map plus queue in the worst case.

## Key Insights

- Flip the problem: “distance from any `0`” with multi-source BFS, not “for each `1`, scan for a `0`.” The reason why this is more efficient is because we're able to calculate each cell's distance from a 0. If we started at each `1`, we'd be repeating the calculation for every `1` in our matrix.
- `distanceMap[i][j] === -1` means unvisited; no separate visited set.
- **Coordinates:** row index = `x` (up/down), col index = `y` (left/right): `x+1` is down, `y+1` is right.

## Practice Notes

- In JS, `queue.shift()` is O(n) per call; fine for interviews, but a real deque would be O(1) pop-front.
