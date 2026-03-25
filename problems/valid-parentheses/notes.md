# Valid Parentheses

**Difficulty:** Easy  
**Topics:** String, Stack  
**LeetCode:** [20. Valid Parentheses](https://leetcode.com/problems/valid-parentheses/)

## Problem

Given a string `s` containing just the characters `'('`, `')'`, `'{'`, `'}'`, `'['`, and `']'`, determine if the input string is *valid*.

A string is valid if:
- Open brackets are closed by the same type of brackets
- Open brackets are closed in the correct order
- Every close bracket has a corresponding open bracket of the same type

## Approach: Stack with Matching Map

- Use a map from closing → opening bracket: `{ ")": "(", "]": "[", "}": "{" }`
- Iterate through the string:
  - If the character is an opening bracket, push it onto a stack
  - If it is a closing bracket, pop from the stack and check that the popped value matches the expected opening bracket from the map
  - If the stack is empty when we need to pop, or the types don’t match, return `false`
- At the end, the string is valid only if the stack is empty (all opens have been closed)

- **Time Complexity:** O(n) - Single pass through `s` (n is length).
- **Space Complexity:** O(n) - Stack holds all opening brackets in the worst case (e.g. `"(((..."`).

## Practice Notes

- Empty string should be considered valid (no unmatched brackets)
- Watch out for early closing brackets like `")("` or `"("` at the end
- This pattern (stack + matching map) generalizes to many “balanced delimiter” problems

