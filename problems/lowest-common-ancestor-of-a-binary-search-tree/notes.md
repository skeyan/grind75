# Lowest Common Ancestor of a Binary Search Tree

**Difficulty:** Medium  
**Topics:** Tree, Depth-First Search, Binary Search Tree, Binary Tree  
**LeetCode:** [235. Lowest Common Ancestor of a Binary Search Tree](https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/)

## Problem

Given a BST rooted at `root` and two distinct nodes `p` and `q` that exist in the tree, return their **lowest common ancestor** (the deepest node that has both `p` and `q` as descendants, where a node can be a descendant of itself).

### Input / output

- **Input:** `root` of a BST; `p` and `q` are `TreeNode` references in that tree (all values unique).  
- **Output:** The `TreeNode` that is the LCA of `p` and `q`.

## Approach: Walk from the root using BST order

Start at the root. If `p` and `q` lie on **opposite sides** of the current node (or one equals the current value), then the current node splits them in the BST ordering, so it is the LCA. Otherwise both are strictly in the left or right subtree; move to that child and repeat.

A stack is optional here (only one child is ever pushed per step); it matches an iterative DFS mental model.

### Key details / gotchas

- The split test is inclusive on both sides (`<=` / `>=`) so that when `p` or `q` is the ancestor of the other, the first node where values “straddle” `cur.val` is still the correct LCA.
- Again, the reason why we can use the check for `p` and `q`'s `val` compared to the current node's `val` is because in BST, only 1 node can meet that criteria and be considered the LCA as it's the only node where `p` and `q` are on different sides of the tree. 
- This logic relies on the **BST property**; the same split idea does not apply to an arbitrary binary tree (that problem needs a different approach).

**Complexity:** O(h) time where h is height, O(1) extra space if you use a single pointer instead of a stack (stack depth is still O(h)).

## Key Insights

- In a BST, the LCA is the first node on the path from root where `p` and `q` are not both strictly left or both strictly right of `cur.val`.
- Ordering of arguments does not matter because the condition is symmetric in `p` and `q`.

## Practice Notes

- Compare with LCA in a general binary tree (236): there you typically need post-order recursion or parent pointers, not value comparisons at each step.
- See https://www.puppygraph.com/blog/depth-first-search-vs-breadth-first-search for good pseudocode for DFS and BFS