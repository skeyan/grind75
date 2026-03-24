/**
 * LeetCode 57 - Insert Interval
 * https://leetcode.com/problems/insert-interval/
 *
 * Insert newInterval into sorted non-overlapping intervals, merging overlaps.
 */

/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
export function insert(intervals, newInterval) {
  let newStart = newInterval[0];
  let newEnd = newInterval[1];

  const newIntervals = [];

  for (let i = 0; i < intervals.length; i++) {
    const cur = intervals[i];

    if (cur[1] < newStart) {
      newIntervals.push(cur);
    } else if (cur[0] > newEnd) {
      newIntervals.push([newStart, newEnd]);
      newIntervals.push(...intervals.slice(i));
      return newIntervals;
    } else {
      newStart = Math.min(cur[0], newStart);
      newEnd = Math.max(cur[1], newEnd);
    }
  }

  newIntervals.push([newStart, newEnd]);
  return newIntervals;
}
