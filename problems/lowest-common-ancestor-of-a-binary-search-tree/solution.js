/**
 * LeetCode 235 - Lowest Common Ancestor of a Binary Search Tree
 * https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/
 *
 * Given a BST and two distinct nodes p and q, return their lowest common ancestor.
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
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @returns {TreeNode | null}
 */
export function lowestCommonAncestor(root, p, q) {
  if (!root) {
    return null;
  }

  const stack = [root];

  while (stack.length) {
    const cur = stack.pop();

    if (
      (p.val <= cur.val && q.val >= cur.val) ||
      (p.val >= cur.val && q.val <= cur.val)
    ) {
      return cur;
    }
    if (p.val < cur.val) {
      stack.push(cur.left);
    } else {
      stack.push(cur.right);
    }
  }

  return null;
}
