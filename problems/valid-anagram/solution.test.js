import { describe, it } from "node:test";
import assert from "node:assert";
import { isAnagram } from "./solution.js";

describe("Valid Anagram", () => {
  it("returns true for basic anagram", () => {
    assert.strictEqual(isAnagram("anagram", "nagaram"), true);
  });

  it("returns false for non-anagram of same length", () => {
    assert.strictEqual(isAnagram("rat", "car"), false);
  });

  it("returns false for different lengths", () => {
    assert.strictEqual(isAnagram("a", "ab"), false);
  });

  it("returns true for empty strings", () => {
    assert.strictEqual(isAnagram("", ""), true);
  });

  it("returns true for single identical characters", () => {
    assert.strictEqual(isAnagram("a", "a"), true);
  });

  it("returns false for single different characters", () => {
    assert.strictEqual(isAnagram("a", "b"), false);
  });

  it("returns true for strings with repeated characters", () => {
    assert.strictEqual(isAnagram("aabb", "bbaa"), true);
  });

  it("returns false when same chars but different frequencies", () => {
    assert.strictEqual(isAnagram("aaab", "aabb"), false);
  });
});
