import { describe, it } from "node:test";
import assert from "node:assert";
import { mergeTwoLists, ListNode } from "./solution.js";

function toList(arr) {
  const dummy = new ListNode();
  let current = dummy;
  for (const val of arr) {
    current.next = new ListNode(val);
    current = current.next;
  }
  return dummy.next;
}

function toArray(head) {
  const result = [];
  while (head) {
    result.push(head.val);
    head = head.next;
  }
  return result;
}

describe("Merge Two Sorted Lists", () => {
  it("merges two non-empty lists", () => {
    const l1 = toList([1, 2, 4]);
    const l2 = toList([1, 3, 4]);
    assert.deepStrictEqual(toArray(mergeTwoLists(l1, l2)), [1, 1, 2, 3, 4, 4]);
  });

  it("returns empty list when both lists are empty", () => {
    assert.deepStrictEqual(toArray(mergeTwoLists(null, null)), []);
  });

  it("returns the other list when one list is empty", () => {
    const l1 = toList([1, 2, 3]);
    assert.deepStrictEqual(toArray(mergeTwoLists(l1, null)), [1, 2, 3]);
    const l2 = toList([4, 5, 6]);
    assert.deepStrictEqual(toArray(mergeTwoLists(null, l2)), [4, 5, 6]);
  });

  it("handles lists of different lengths", () => {
    const l1 = toList([1, 5]);
    const l2 = toList([2, 3, 4, 6, 7]);
    assert.deepStrictEqual(toArray(mergeTwoLists(l1, l2)), [1, 2, 3, 4, 5, 6, 7]);
  });

  it("handles lists with duplicate values", () => {
    const l1 = toList([1, 1, 1]);
    const l2 = toList([1, 1, 1]);
    assert.deepStrictEqual(toArray(mergeTwoLists(l1, l2)), [1, 1, 1, 1, 1, 1]);
  });

  it("handles single-element lists", () => {
    const l1 = toList([2]);
    const l2 = toList([1]);
    assert.deepStrictEqual(toArray(mergeTwoLists(l1, l2)), [1, 2]);
  });

  it("handles negative values", () => {
    const l1 = toList([-3, -1, 2]);
    const l2 = toList([-2, 0, 4]);
    assert.deepStrictEqual(toArray(mergeTwoLists(l1, l2)), [-3, -2, -1, 0, 2, 4]);
  });
});
