import { describe, it } from "node:test";
import assert from "node:assert";
import { inorderTraversal, TreeNode } from "./solution.js";

/**
 * Build a tree from LeetCode-style level-order array (null for missing nodes).
 * Children of index i are at 2*i+1 and 2*i+2.
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

describe("Binary Tree Inorder Traversal", () => {
  it("returns empty array for empty tree", () => {
    assert.deepStrictEqual(inorderTraversal(null), []);
  });

  it("returns single value for one node", () => {
    const root = new TreeNode(1);
    assert.deepStrictEqual(inorderTraversal(root), [1]);
  });

  it("inorder for root with right subtree and nested left (LeetCode heap shape)", () => {
    const root = fromArray([1, null, 2, null, null, 3]);
    assert.deepStrictEqual(inorderTraversal(root), [1, 3, 2]);
  });

  it("handles LeetCode example [3,9,20,null,null,15,7]", () => {
    const root = fromArray([3, 9, 20, null, null, 15, 7]);
    assert.deepStrictEqual(inorderTraversal(root), [9, 3, 15, 20, 7]);
  });

  it("handles left-skewed tree", () => {
    const root = fromArray([1, 2, null, 3, null, null, null, 4]);
    assert.deepStrictEqual(inorderTraversal(root), [4, 3, 2, 1]);
  });
});
