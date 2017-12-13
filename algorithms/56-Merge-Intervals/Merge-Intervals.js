/**
 * 一刷时间: 2017-04-10
 * 二刷时间：2017-12-13
 * 来自: https://leetcode.com/problems/merge-intervals
 */
(function(exports) {

    function Interval(start, end) {
        this.start = start;
        this.end = end;
    }
    /**
     * Definition for an interval.
     * function Interval(start, end) {
     *     this.start = start;
     *     this.end = end;
     * }
     */
    /**
     * @param {Interval[]} intervals
     * @return {Interval[]}
     */
    function merge(intervals) {
        if (!intervals || !intervals[0]) {
            return [];
        }
        intervals.sort(function(a, b) {
            if (a.start > b.start) {
                return 1;
            } else if (a.start < b.start) {
                return -1;
            } else {
                return a.end - b.end;
            }
        });
        const res = [];
        const len = intervals.length;
        let start = intervals[0].start;
        let end = intervals[0].end;

        for (let i = 1; i < len; i++) {
            const currInter = intervals[i];

            if (currInter.start > end) {
                res.push(new Interval(start, end));
                start = currInter.start;
                end = currInter.end;
            } else {
                end = Math.max(end, currInter.end);
            }
        }

        res.push(new Interval(start, end));

        return res;
    }
    exports.merge = merge;

})(window.LeetCode = window.LeetCode || {});