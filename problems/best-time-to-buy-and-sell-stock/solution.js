/**
 * LeetCode 121 - Best Time to Buy and Sell Stock
 * https://leetcode.com/problems/best-time-to-buy-and-sell-stock/
 *
 * Given an array of prices where prices[i] is the price on day i,
 * return the maximum profit from one buy-sell transaction.
 */

/**
 * @param {number[]} prices
 * @returns {number}
 */
export function maxProfit(prices) {
  let profit = 0;
  let buyVal = prices[0];

  for (let i = 0; i < prices.length; i++) {
    const curVal = prices[i];

    if (curVal - buyVal > profit) {
      profit = curVal - buyVal;
    }

    if (curVal < buyVal) {
      buyVal = curVal;
    }
  }

  return profit;
}
