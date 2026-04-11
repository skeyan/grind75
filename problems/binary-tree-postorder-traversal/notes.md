# Binary Tree Postorder Traversal

**Difficulty:** Easy  
**Topics:** Stack, Tree, Depth-First Search, Binary Tree  
**LeetCode:** [145. Binary Tree Postorder Traversal](https://leetcode.com/problems/binary-tree-postorder-traversal/)

## Problem

Given the `root` of a binary tree, return the postorder traversal of its nodes' values (left subtree, then right subtree, then root).

## Approach: Iterative DFS with stack peek and lastVisited

- Walk left while pushing nodes on the stack, same as many iterative DFS patterns.
- When you cannot go left further, peek at the stack top without popping: if it has a right child that is not the node you just finished (`lastVisited`), move `cur` into that right subtree. Otherwise the right side is absent or done, so pop, record the value, set `lastVisited` to that node, and set `cur` to null so the next iteration re-peeks the new stack top.

- **Time Complexity:** O(n) - Each node is pushed once and popped at most once.
- **Space Complexity:** O(n) - Stack holds up to tree height; output is O(n) separately.

## Practice Notes

- Peeking instead of blindly popping avoids visiting a parent before its right subtree is finished.
- `lastVisited` distinguishes “returning from the right child” from “have not entered the right subtree yet,” so you do not loop on the same right edge twice.
