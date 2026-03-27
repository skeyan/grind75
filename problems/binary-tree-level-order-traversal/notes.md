# Binary Tree Level Order Traversal

**Difficulty:** Medium  
**Topics:** Tree, Breadth-First Search, Binary Tree  
**LeetCode:** [102. Binary Tree Level Order Traversal](https://leetcode.com/problems/binary-tree-level-order-traversal/)

## Problem

Given the `root` of a binary tree, return the level order traversal of its nodes' values (from left to right, level by level).

## Approach: BFS with (level, node) pairs

- Use a queue for breadth-first traversal.
- Store pairs as `[level, node]` so each node carries its depth.
- When visiting a node:
  - If that level does not exist in `levels`, create it with the current value.
  - Otherwise append to the existing level array.
- Enqueue children with `level + 1`.

- **Time Complexity:** O(n) - Each node is dequeued and processed once.
- **Space Complexity:** O(n) - Queue and output can together hold all nodes in worst case.

## Practice Notes

- This pattern is useful whenever output is grouped by depth.
- Alternative approach: process one queue size at a time per loop and collect one `currentLevel` array each round.
