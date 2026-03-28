/**
 * LeetCode 144 - Binary Tree Preorder Traversal
 * https://leetcode.com/problems/binary-tree-preorder-traversal/
 *
 * Return node values in root-left-right order.
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
 * @returns {number[]}
 */
export function preorderTraversal(root) {
  if (!root) {
    return [];
  }

  const preorder = []; // Root -> Left all -> Right all
  const stack = [root];

  while (stack.length) {
    const cur = stack.pop();

    preorder.push(cur.val); // Process root
    if (cur.right) stack.push(cur.right); // Do left first
    if (cur.left) stack.push(cur.left);
  }

  return preorder;
}
