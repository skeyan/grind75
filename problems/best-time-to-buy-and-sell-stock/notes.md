# Best Time to Buy and Sell Stock

**Difficulty:** Easy  
**Topics:** Array, Dynamic Programming  
**LeetCode:** [121. Best Time to Buy and Sell Stock](https://leetcode.com/problems/best-time-to-buy-and-sell-stock/)

## Problem

Given an array `prices` where `prices[i]` is the price of a given stock on the *i*-th day, find the maximum profit you can achieve by choosing a single day to buy and a single day to sell in the future. If no profit is possible, return `0`.

## Approach: Track Minimum Price

- Walk through the array once, maintaining two variables:
  - `buyVal` — the lowest price seen so far (best day to have bought)
  - `maxProfit` — the best profit achievable so far
- At each price, check if selling today beats the current best profit
- If today's price is lower than `buyVal`, update it — any future sell should use this cheaper buy
- **Time Complexity:** \(O(n)\) — single pass through the array  
- **Space Complexity:** \(O(1)\) — only two variables

## Key Insights

- This is essentially finding the maximum difference `prices[j] - prices[i]` where `j > i`
- Brute force would check all pairs in \(O(n^2)\); tracking the running minimum reduces it to \(O(n)\)
- The greedy logic works because we only need one transaction — always buy at the cheapest point seen so far and check if today's sell is the best
- If prices only decrease, `maxProfit` stays at `0` (no profitable transaction exists)

## Practice Notes

- _Add your own notes here: edge cases, gotchas, alternative approaches..._

The main intuition behind this greedy approach is about moving forward in time. Since you can only sell after you buy, any lower price you find later is always the new buy candidate. All prices in the past are no longer within consideration - similar to IRL.