# Binary Tree Inorder Traversal

**Difficulty:** Easy  
**Topics:** Stack, Tree, Depth-First Search, Binary Tree  
**LeetCode:** [94. Binary Tree Inorder Traversal](https://leetcode.com/problems/binary-tree-inorder-traversal/)

## Problem

Given the `root` of a binary tree, return the inorder traversal of its nodes' values (left subtree, then root, then right subtree).

## Approach: Iterative DFS with a stack (three cases)

- **Case 1 —** `cur` has a left child: you are still descending the left spine, so push `cur` for later (its value is not ready yet) and move to `cur.left`.
- **Case 2 —** `cur` exists but has no left child: you are at the leftmost unvisited node in this subtree, so append `cur.val`, then continue from `cur.right` (treat that subtree as the new focus).
- **Case 3 —** `cur` is null: there was no right child to step into, so the current path is finished; pop the saved parent from the stack, append its value, then continue from its right child.

- **Time Complexity:** O(n) - Each node is pushed and popped at most once.
- **Space Complexity:** O(n) - Stack holds up to tree height; output is O(n) separately.

## Practice Notes

- The stack holds nodes whose left branch has been handled but whose value has not been emitted yet.
- Case 2 and Case 3 both “visit” a node and then move right; Case 3 is the unwind when you fell off a null right pointer.
