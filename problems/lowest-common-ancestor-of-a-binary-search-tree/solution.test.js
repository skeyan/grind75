import { describe, it } from "node:test";
import assert from "node:assert";
import { lowestCommonAncestor, TreeNode } from "./solution.js";

/**
 * Build a tree from LeetCode-style level-order array (null for missing nodes).
 * @param {(number | null)[]} arr
 * @returns {TreeNode | null}
 */
function fromArray(arr) {
  if (!arr.length || arr[0] === null) return null;
  const nodes = arr.map((val) => (val !== null ? new TreeNode(val) : null));
  for (let i = 0; i < nodes.length; i++) {
    if (nodes[i] === null) continue;
    const leftIdx = 2 * i + 1;
    const rightIdx = 2 * i + 2;
    nodes[i].left = leftIdx < arr.length ? nodes[leftIdx] ?? null : null;
    nodes[i].right = rightIdx < arr.length ? nodes[rightIdx] ?? null : null;
  }
  return nodes[0];
}

/**
 * @param {TreeNode | null} root
 * @param {number} val
 * @returns {TreeNode | null}
 */
function findNode(root, val) {
  if (!root) return null;
  if (root.val === val) return root;
  return findNode(root.left, val) ?? findNode(root.right, val);
}

describe("Lowest Common Ancestor of a Binary Search Tree", () => {
  it("returns null for empty tree", () => {
    const p = new TreeNode(1);
    const q = new TreeNode(2);
    assert.strictEqual(lowestCommonAncestor(null, p, q), null);
  });

  it("LeetCode example: p=2, q=8 -> 6", () => {
    const root = fromArray([6, 2, 8, 0, 4, 7, 9]);
    const p = findNode(root, 2);
    const q = findNode(root, 8);
    const lca = lowestCommonAncestor(root, p, q);
    assert.strictEqual(lca?.val, 6);
  });

  it("LeetCode example: p=2, q=4 -> 2", () => {
    const root = fromArray([6, 2, 8, 0, 4, 7, 9]);
    const p = findNode(root, 2);
    const q = findNode(root, 4);
    const lca = lowestCommonAncestor(root, p, q);
    assert.strictEqual(lca?.val, 2);
  });

  it("both nodes in right subtree", () => {
    const root = fromArray([6, 2, 8, 0, 4, 7, 9]);
    const p = findNode(root, 7);
    const q = findNode(root, 9);
    const lca = lowestCommonAncestor(root, p, q);
    assert.strictEqual(lca?.val, 8);
  });
});
