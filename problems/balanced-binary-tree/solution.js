/**
 * LeetCode 110 - Balanced Binary Tree
 * https://leetcode.com/problems/balanced-binary-tree/
 *
 * A height-balanced binary tree: each node's left and right subtree heights differ by at most 1.
 */

/**
 * @param {number} val
 * @param {TreeNode|null} left
 * @param {TreeNode|null} right
 */
export function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

/**
 * @param {TreeNode | null} root
 * @returns {boolean}
 */
export function isBalanced(root) {
  if (!root) {
    return true;
  }
  // Pop a node
  // Check if both children's heights are already in the Map
  //   If yes → compute this node's height, store it, check balance
  //   If no → push it back and push unprocessed children first
  const stack = [root];
  const heights = new Map();
  heights.set(null, 0);

  while (stack.length) {
    const cur = stack.pop();
    if (heights.has(cur.left) && heights.has(cur.right)) {
      // We're back, going up
      if (Math.abs(heights.get(cur.left) - heights.get(cur.right)) > 1) {
        return false;
      }

      const curHeight = Math.max(heights.get(cur.left), heights.get(cur.right)) + 1;
      heights.set(cur, curHeight);
    } else {
      // We didn't get to the bottom yet, going down
      if (cur.left || cur.right) {
        stack.push(cur);
      }
      if (cur.left) {
        stack.push(cur.left);
      }
      if (cur.right) {
        stack.push(cur.right);
      }
    }
  }

  return true;
}
