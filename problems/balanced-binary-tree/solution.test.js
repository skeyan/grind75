import { describe, it } from "node:test";
import assert from "node:assert";
import { isBalanced, TreeNode } from "./solution.js";

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

describe("Balanced Binary Tree", () => {
  it("returns true for empty tree", () => {
    assert.strictEqual(isBalanced(null), true);
  });

  it("returns true for single node", () => {
    assert.strictEqual(isBalanced(new TreeNode(1)), true);
  });

  it("returns true for LeetCode example [3,9,20,null,null,15,7]", () => {
    const root = fromArray([3, 9, 20, null, null, 15, 7]);
    assert.strictEqual(isBalanced(root), true);
  });

  it("returns false for LeetCode example [1,2,2,3,3,null,null,4,4]", () => {
    const root = fromArray([1, 2, 2, 3, 3, null, null, 4, 4]);
    assert.strictEqual(isBalanced(root), false);
  });

  it("returns true for perfect tree of height 2", () => {
    const root = fromArray([1, 2, 3]);
    assert.strictEqual(isBalanced(root), true);
  });

  it("returns false for left-skewed chain longer than balanced", () => {
    const root = fromArray([1, 2, null, 3, null, null, null, 4]);
    assert.strictEqual(isBalanced(root), false);
  });
});
