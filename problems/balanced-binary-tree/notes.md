# Balanced Binary Tree

**Difficulty:** Easy  
**Topics:** Tree, Depth-First Search, Binary Tree  
**LeetCode:** [110. Balanced Binary Tree](https://leetcode.com/problems/balanced-binary-tree/)

## Problem

Given the `root` of a binary tree, decide if it is **height-balanced**: for every node, the depth of its two subtrees must not differ by more than one.

## Approach: Iterative post-order DFS

You need each node’s **left and right subtree heights** before you can check that node — so process **children before parents** (post-order, or basically just push the current node and then its children so the current node is processed later). Use a **stack** for the walk and a **Map** from node to computed height. Start with `null → 0` so you never branch on missing children and avoid throwing on null nodes.

Finally, when you pop a node and **both** children are already in the map, compare their heights using the map since it means we've come back up to the node and it's "ready"; if the gap is more than 1, return `false`. Otherwise set this node’s height to `max(leftH, rightH) + 1`, store it, and continue. If you never fail, the tree is balanced.

- **Time Complexity:** O(n) - Each node is pushed and finalized once (n is number of nodes).
- **Space Complexity:** O(n) - Stack and map store heights for nodes visited along the traversal (n is number of nodes).

## Practice Notes

- "Post-order" is a fancy way of what we did by just essentially delaying the current node/root's calculations until all of the subtrees are processed. What makes this traversal "post" is that visiting a node is done "after" the left and right child nodes are called recursively. Just focus on the general logic described in the comments of the code. 
- See https://www.w3schools.com/dsa/dsa_algo_binarytrees_postorder.php for explanation of post-order.
- Recursive post-order is the same idea with O(h) call-stack space (h is tree height). Personally I feel like iterative DFS is almost always more intuitive for anything beyond a simple recursion problem.
