import { describe, it } from "node:test";
import assert from "node:assert";
import { isValid } from "./solution.js";

describe("Valid Parentheses", () => {
  it("returns true for simple matching parentheses", () => {
    assert.strictEqual(isValid("()"), true);
  });

  it("returns true for multiple matching bracket types", () => {
    assert.strictEqual(isValid("()[]{}"), true);
  });

  it("returns false for mismatched brackets", () => {
    assert.strictEqual(isValid("(]"), false);
  });

  it("returns true for nested brackets", () => {
    assert.strictEqual(isValid("([])"), true);
  });

  it("returns false for incorrect nesting order", () => {
    assert.strictEqual(isValid("([)]"), false);
  });

  it("returns true for an empty string", () => {
    assert.strictEqual(isValid(""), true);
  });

  it("returns false for a single opening bracket", () => {
    assert.strictEqual(isValid("("), false);
  });

  it("returns false for a single closing bracket", () => {
    assert.strictEqual(isValid(")"), false);
  });

  it("returns true for deeply nested brackets", () => {
    assert.strictEqual(isValid("{[()]}"), true);
  });
});
