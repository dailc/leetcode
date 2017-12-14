/**
 * 一刷时间: 2017-04-11
 * 二刷时间：2017-12-14
 * 来自: https://leetcode.com/problems/insert-interval
 */
(function(exports) {

    function Interval(start, end) {
        this.start = start;
        this.end = end;
    }

    exports.Interval = Interval;

    function insert2(intervals, newInterval) {
        if (!intervals) {
            return [];
        }
        let len = intervals.length;

        if (len === 0) {
            intervals.push(newInterval);

            return intervals;
        }

        let l = 0;
        let r = len - 1;

        while (l <= r) {
            const mid = (1 + r) >> 1;

            if (intervals[mid].start > newInterval.start) {
                r = mid - 1;
            } else {
                l = mid + 1;
            }
        }

        intervals.splice(l, 0, newInterval);
        // 长度已经加了
        len++;

        const res = [];
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

    /**
     * Definition for an interval.
     * function Interval(start, end) {
     *     this.start = start;
     *     this.end = end;
     * }
     */
    /**
     * @param {Interval[]} intervals
     * @param {Interval} newInterval
     * @return {Interval[]}
     */
    function insert(intervals, newInterval) {
        if (!intervals) {
            return [];
        }
        let len = intervals.length;

        if (len === 0) {
            intervals.push(newInterval);

            return intervals;
        }

        for (let i = 0; i < len; i++) {
            const curInterval = intervals[i];

            if (curInterval.start > newInterval.end) {
                // 会添加到i的前方
                intervals.splice(i, 0, newInterval);

                return intervals;
            }
            if (newInterval.start > curInterval.end) {
                // newInterval过大，去下一个判断
                continue;
            }
            // 否则就是开始区间和结束区间混合的状态
            newInterval.start = Math.min(curInterval.start, newInterval.start);
            newInterval.end = Math.max(curInterval.end, newInterval.end);

            // 删除当前的i(因为混合部分已经被newInterval合并了)
            intervals.splice(i, 1);
            // 从下一个开始判断
            len--;
            i--;
        }

        // 最后一个区间仍然需要加上-因为这时候代表前面没有符合的插入
        intervals.push(newInterval);

        return intervals;
    }

    exports.insert = insert;

})(window.LeetCode = window.LeetCode || {});