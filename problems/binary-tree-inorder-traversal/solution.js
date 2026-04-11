/**
 * LeetCode 94 - Binary Tree Inorder Traversal
 * https://leetcode.com/problems/binary-tree-inorder-traversal/
 *
 * Return node values in left-root-right order.
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
export function inorderTraversal(root) {
  const inorder = [];
  const stack = [];
  let cur = root;

  while (cur || stack.length) {
    while (cur) {
      stack.push(cur);
      cur = cur.left;
    }
    cur = stack.pop();
    inorder.push(cur.val);
    cur = cur.right;
  }

  return inorder;
}
