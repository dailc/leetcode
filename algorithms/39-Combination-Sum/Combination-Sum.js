/*
 * 一刷时间: 2017-04-04
 * 二刷时间：2017-11-25
 * 来自: https://leetcode.com/problems/combination-sum
 */
(function(exports) {

    /**
     * @param {number[]} candidates
     * @param {number} target
     * @return {number[][]}
     */
    function combinationSum(candidates, target) {
        if (!candidates || target < 0) {
            return [];
        }

        candidates.sort(function(a, b) {
            return a - b;
        });

        const res = [];

        dfs(res, candidates, [], 0, candidates.length, target);

        return res;
    }

    function dfs(res, candidates, curr, index, len, target) {
        if (target <= 0) {
            // 添加结果集合
            target === 0 && res.push(curr.slice(0));

            return;
        }

        for (let i = index; i < len; i++) {
            const num = candidates[i];

            if (num > target) {
                break;
            }
            if (num < 0 || num === candidates[i - 1]) {
                // 不能小于0，也不能和前面一个重复（因为每一个数都是可以复用无数次的，前面重复的这个数肯定就已经试了所有结果了）
                continue;
            }
            curr.push(num);
            dfs(res, candidates, curr, i, len, target - num);
            curr.pop();
        }
    }

    exports.combinationSum = combinationSum;

})(window.LeetCode = window.LeetCode || {});