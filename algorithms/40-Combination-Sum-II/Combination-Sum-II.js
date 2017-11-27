/*
 * 一刷时间: 2017-04-04
 * 二刷时间：2017-11-26
 * 来自: https://leetcode.com/problems/combination-sum-ii
 */
(function(exports) {

    /**
     * @param {number[]} candidates
     * @param {number} target
     * @return {number[][]}
     */
    function combinationSum2(candidates, target) {
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
            target === 0 && res.push(curr.slice(0));

            return;
        }

        for (let i = index; i < len; i++) {
            const num = candidates[i];

            if (num > target) {
                break;
            }
            curr.push(num);
            dfs(res, candidates, curr, i + 1, len, target - num);
            curr.pop();

            // 去重，当前这个已经遍历的数字下一次不允许继续重复遍历
            while (num === candidates[i + 1]) {
                i++;
            }
        }
    }

    export.combinationSum2 = combinationSum2;

})(window.LeetCode = window.LeetCode || {});