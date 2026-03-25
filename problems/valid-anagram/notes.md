# Valid Anagram

**Difficulty:** Easy  
**Topics:** Hash Table, String, Sorting  
**LeetCode:** [242. Valid Anagram](https://leetcode.com/problems/valid-anagram/)

## Problem

Given two strings `s` and `t`, return `true` if `t` is an anagram of `s`, and `false` otherwise.

## Approach 1: Sort & Compare

Clean and simple. Need `.split()` first since strings don't have a sort method. The `if`/`return true`/`return false` pattern can just be a direct return of the comparison.

### Solution

```javascript
var isAnagram = function(s, t) {
    s = s.split("").sort().join("");
    t = t.split("").sort().join("");
    return s === t;
};
```

- **Time Complexity:** O(n log n) - Sorting dominates (n is string length).
- **Space Complexity:** O(n) - Sorted character arrays or joined strings.

## Approach 2: Fixed Frequency Array

Best of both worlds, but only valid when input is guaranteed lowercase English letters.

### Solution

```javascript
var isAnagram = function(s, t) {
    if (s.length !== t.length) return false;

    const freq = new Array(26).fill(0);

    for (let i = 0; i < s.length; i++) {
        freq[s.charCodeAt(i) - 97]++;
        freq[t.charCodeAt(i) - 97]--;
    }

    return freq.every(n => n === 0);
};
```

- **Time Complexity:** O(n) - One pass over both strings (n is length).
- **Space Complexity:** O(1) - Fixed array of 26 counters (lowercase English letters only).

## Approach 3: Frequency Map

Slightly worse space than the array, but handles unicode and arbitrary character sets.

### Solution

```javascript
var isAnagram = function(s, t) {
    if (s.length !== t.length) return false;

    const freq = new Map();

    for (let i = 0; i < s.length; i++) {
        freq.set(s[i], (freq.get(s[i]) || 0) + 1);
        freq.set(t[i], (freq.get(t[i]) || 0) - 1);
    }

    return [...freq.values()].every(n => n === 0);
};
```

- **Time Complexity:** O(n) - One pass over both strings (n is length).
- **Space Complexity:** O(n) - Map holds at most one entry per distinct character.

## Key Insights

- Sort is cleanest to write, fixed array is most efficient under constrained input, map is most flexible.
- The early `s.length !== t.length` check in approaches 2 and 3 is a free short-circuit.
- The fixed array trick (`charCodeAt(i) - 97`) maps `'a'`–`'z'` to indices `0`–`25`.

## Practice Notes

- Main approach: Sort & Compare — easiest to remember and write quickly.
