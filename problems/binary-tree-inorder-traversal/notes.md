# Binary Tree Inorder Traversal

**Difficulty:** Easy  
**Topics:** Stack, Tree, Depth-First Search, Binary Tree  
**LeetCode:** [94. Binary Tree Inorder Traversal](https://leetcode.com/problems/binary-tree-inorder-traversal/)

## Problem

Given the `root` of a binary tree, return the inorder traversal of its nodes' values (left subtree, then root, then right subtree).

## Approach: Iterative DFS with a stack

- Walk left from the current node, pushing each node on the stack until there is no left child.
- Pop the top node, record its value, then treat its right child as the new current node and repeat.
- When the current pointer is null but the stack is not, popping continues the traversal up the tree.

- **Time Complexity:** O(n) - Each node is pushed and popped at most once.
- **Space Complexity:** O(n) - Stack holds up to tree height; output is O(n) separately.

## Practice Notes

- The inner “go all the way left” loop is the standard way to defer visiting a node until its left subtree is finished.
