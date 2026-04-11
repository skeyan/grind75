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
  if (!root) {
    return [];
  }

  const inorder = [];
  const stack = [];
  let cur = root;

  while (stack.length || cur) {
    if (cur && cur.left) {
      // Case 1: Still going down the left subtree.
      // Save cur for later (we're not ready to process it yet)
      // and keep going left.
      stack.push(cur);
      cur = cur.left;
    } else if (cur) {
      // Case 2: cur exists but has no left child.
      // We're at the leftmost node of this subtree — process it,
      // then move to its right subtree (which becomes the new "root").
      inorder.push(cur.val);
      cur = cur.right;
    } else {
      // Case 3: cur is null — no right child existed.
      // We're done with this subtree, go back up to the saved root
      // process it, then move to its right subtree.
      cur = stack.pop();
      inorder.push(cur.val);
      cur = cur.right;
    }
  }

  return inorder;
}
