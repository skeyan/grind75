/**
 * LeetCode 226 - Invert Binary Tree
 * https://leetcode.com/problems/invert-binary-tree/
 *
 * Invert the tree by swapping the left and right child of every node.
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
 * @returns {TreeNode | null}
 */
export function invertTree(root) {
  if (!root) {
    return null;
  }

  const nodeQueue = [root];

  while (nodeQueue.length) {
    const curNode = nodeQueue.shift();

    const temp = curNode.left;
    curNode.left = curNode.right;
    curNode.right = temp;

    if (curNode.left) {
      nodeQueue.push(curNode.left);
    }
    if (curNode.right) {
      nodeQueue.push(curNode.right);
    }
  }

  return root;
}
