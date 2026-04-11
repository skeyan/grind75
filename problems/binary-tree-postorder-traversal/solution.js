/**
 * LeetCode 145 - Binary Tree Postorder Traversal
 * https://leetcode.com/problems/binary-tree-postorder-traversal/
 *
 * Return node values in left-right-root order.
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
export function postorderTraversal(root) {
  if (!root) {
    return [];
  }

  let cur = root;
  const postorder = [];
  let lastVisited = null;
  const stack = [];

  while (cur || stack.length) {
    while (cur) {
      stack.push(cur);
      cur = cur.left;
    }

    // After the inner while finishes drilling left, cur is null. At that point you need to look at the top of the stack to decide what to do next — but you can't pop it yet, because you might not be ready to visit it (its right side might be unfinished). So you just read it without removing it.
    const top = stack[stack.length - 1];
    if (top.right && top.right !== lastVisited) {
      cur = top.right;
    } else {
      stack.pop();
      postorder.push(top.val);
      lastVisited = top;
      cur = null;
    }
  }

  return postorder;
}
