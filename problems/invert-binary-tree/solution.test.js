import { describe, it } from "node:test";
import assert from "node:assert";
import { invertTree, TreeNode } from "./solution.js";

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

/**
 * Serialize tree to level-order array (null for missing nodes).
 * @param {TreeNode | null} root
 * @returns {(number | null)[]}
 */
function toArray(root) {
  if (!root) return [];
  const out = [];
  const queue = [root];
  while (queue.length) {
    const node = queue.shift();
    if (!node) {
      out.push(null);
      continue;
    }
    out.push(node.val);
    queue.push(node.left ?? null);
    queue.push(node.right ?? null);
  }
  while (out.length && out[out.length - 1] === null) out.pop();
  return out;
}

describe("Invert Binary Tree", () => {
  it("returns null for empty tree", () => {
    assert.strictEqual(invertTree(null), null);
  });

  it("returns same node for single node", () => {
    const root = new TreeNode(1);
    const got = invertTree(root);
    assert.strictEqual(got?.val, 1);
    assert.strictEqual(got?.left, null);
    assert.strictEqual(got?.right, null);
  });

  it("inverts a small tree (root with two children)", () => {
    const root = fromArray([2, 1, 3]);
    const inverted = invertTree(root);
    assert.deepStrictEqual(toArray(inverted), [2, 3, 1]);
  });

  it("inverts LeetCode example [4,2,7,1,3,6,9]", () => {
    const root = fromArray([4, 2, 7, 1, 3, 6, 9]);
    const inverted = invertTree(root);
    assert.deepStrictEqual(toArray(inverted), [4, 7, 2, 9, 6, 3, 1]);
  });

  it("inverts left-skewed tree", () => {
    const root = fromArray([1, 2, null, 3]);
    const inverted = invertTree(root);
    assert.deepStrictEqual(toArray(inverted), [1, null, 2, null, 3]);
  });

  it("inverts right-skewed tree", () => {
    const root = fromArray([1, null, 2, null, null, null, 3]);
    const inverted = invertTree(root);
    assert.deepStrictEqual(toArray(inverted), [1, 2, null, 3]);
  });

  it("double invert returns original structure", () => {
    const arr = [4, 2, 7, 1, 3, 6, 9];
    const root = fromArray([...arr]);
    const once = invertTree(root);
    const twice = invertTree(once);
    assert.deepStrictEqual(toArray(twice), arr);
  });
});
