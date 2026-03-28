# Binary Tree Preorder Traversal

**Difficulty:** Easy  
**Topics:** Stack, Tree, Depth-First Search, Binary Tree  
**LeetCode:** [144. Binary Tree Preorder Traversal](https://leetcode.com/problems/binary-tree-preorder-traversal/)

## Problem

Given the `root` of a binary tree, return the preorder traversal of its nodes' values (root, then left subtree, then right subtree).

## Approach: Iterative DFS with a stack

- Push the root on a stack. While the stack is non-empty, pop a node, record its value, then push right child then left child so the next pop is the left subtree first.
- Matches preorder order without recursion.

- **Time Complexity:** O(n) - Each node is popped and pushed at most once.
- **Space Complexity:** O(n) - Stack holds up to height or width of the tree; output is O(n) separately.

## Practice Notes

- Pushing right before left is the standard trick so the stack yields left-before-right on pop.
- https://www.w3schools.com/dsa/dsa_algo_binarytrees_preorder.php