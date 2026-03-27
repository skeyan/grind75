/**
 * LeetCode 102 - Binary Tree Level Order Traversal
 * https://leetcode.com/problems/binary-tree-level-order-traversal/
 *
 * Return node values grouped by level from top to bottom.
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
 * @returns {number[][]}
 */
export function levelOrder(root) {
  if (!root) {
    return [];
  }

  const levels = [];
  const queue = [[0, root]];

  while (queue.length) {
    const [curLevel, curNode] = queue.shift();

    if (levels.length - 1 < curLevel) {
      levels.push([curNode.val]);
    } else {
      levels[curLevel].push(curNode.val);
    }

    if (curNode.left) {
      queue.push([curLevel + 1, curNode.left]);
    }
    if (curNode.right) {
      queue.push([curLevel + 1, curNode.right]);
    }
  }

  return levels;
}
