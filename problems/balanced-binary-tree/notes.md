# Balanced Binary Tree

**Difficulty:** Easy  
**Topics:** Tree, Depth-First Search, Binary Tree  
**LeetCode:** [110. Balanced Binary Tree](https://leetcode.com/problems/balanced-binary-tree/)

## Problem

Given the `root` of a binary tree, decide if it is **height-balanced**: for every node, the depth of its two subtrees must not differ by more than one.

## Approach: Iterative post-order DFS

You need each node’s **left and right subtree heights** before you can check that node — so process **children before parents** (post-order). Use a **stack** for the walk and a **Map** from node to computed height. Start with `null → 0` so you never branch on missing children.

When you pop a node and **both** children are already in the map, compare their heights; if the gap is more than 1, return `false`. Otherwise set this node’s height to `max(leftH, rightH) + 1`, store it, and continue. If you never fail, the tree is balanced.

- **Time Complexity:** O(n) - Each node is pushed and finalized once (n is number of nodes).
- **Space Complexity:** O(n) - Stack and map store heights for nodes visited along the traversal (n is number of nodes).

## Practice Notes

- Recursive post-order is the same idea with O(h) call-stack space (h is tree height).
