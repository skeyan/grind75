# Two Sum

**Difficulty:** Easy  
**Topics:** Array, Hash Table  
**LeetCode:** [1. Two Sum](https://leetcode.com/problems/two-sum/)

## Problem

Given an array of integers `nums` and an integer `target`, return *indices of the two numbers such that they add up to `target`*.

## Approach: Hash Map (One Pass)

- Iterate through array, for each num compute `complement = target - num`
- Use Map to store `{ num → index }` as we go
- If complement already in map → return `[map.get(complement), i]`
- Time: O(n), Space: O(n)

## Key Insights

- Brute force is O(n²) — two nested loops
- Trade space for time: hash map lets us do O(1) lookup

## Practice Notes

- _Add your own notes here: edge cases, gotchas, alternative approaches..._

