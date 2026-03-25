# Invert Binary Tree

**Difficulty:** Easy  
**Topics:** Tree, Breadth-First Search, Depth-First Search, Binary Tree  
**LeetCode:** [226. Invert Binary Tree](https://leetcode.com/problems/invert-binary-tree/)

## Problem

Given the `root` of a binary tree, invert the tree (mirror it), and return its root. Inversion means swapping the left and right child of every node.

## Approach: BFS — Swap Each Node’s Children

You don’t “move” the leftmost node to the rightmost or think about the whole structure. At each node, you only **swap that node’s left and right children**. Doing this for every node (top-down with BFS or bottom-up with DFS) inverts the entire tree.

- Use a **queue** and start with `root`.
- While the queue is non-empty:
  - Dequeue a node.
  - Swap its `left` and `right` (with a temp variable).
  - If `left` exists, enqueue it; if `right` exists, enqueue it.
- Return `root`.

- **Time Complexity:** O(n) - Each node is visited once (n is number of nodes).
- **Space Complexity:** O(n) - Queue holds at most one full level; in a perfect tree the last level has about n/2 nodes, so worst-case queue size is O(n).

### Summary of the insight

You’re not “replacing the leftmost with the rightmost” — that’s taken care of by swapping at the **parent** level. When every parent swaps its two children, the whole tree inverts. You never need to think about moving a node across the tree; just tell every parent “swap your two kids” and do it top-down (BFS) or bottom-up (DFS). For tree problems in general, you rarely need to think globally; define what **one node** should do, then do it for every node to get the result.

## Practice Notes

- _Add your own notes here: edge cases, recursive version, alternative traversals..._

### Recursive (DFS) alternative

At each node: swap `left` and `right`, then recursively invert `left` and `right`. Base case: `if (!root) return null`. Same O(n) time; space is O(h) for the call stack (h is height).

### Queue and Stack in JavaScript

```
var stack = [];
stack.push(2);       // stack is now [2]
stack.push(5);       // stack is now [2, 5]
var i = stack.pop(); // stack is now [2]
alert(i);            // displays 5

var queue = [];
queue.push(2);         // queue is now [2]
queue.push(5);         // queue is now [2, 5]
var i = queue.shift(); // queue is now [5]
alert(i);              // displays 2
```