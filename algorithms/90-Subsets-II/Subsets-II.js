/**
 * 一刷时间: 2017-04-24
 * 二刷时间：2018-01-15
 * 来自: https://leetcode.com/problems/subsets-ii
 */
(function(exports) {

    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    function subsetsWithDup(nums) {
        if (!nums) {
            return [];
        }
        const res = [];
        const len = nums.length;

        // 先排序
        nums.sort();
        res.push([]);

        for (let i = 1; i <= len; i++) {
            dfs(res, nums, [], 0, i);
        }

        return res;
    }

    function dfs(res, nums, list, from, count) {
        if (list.length === count) {
            res.push(list.slice(0));

            return;
        }
        for (let i = from; i < nums.length; i++) {
            list.push(nums[i]);
            dfs(res, nums, list, i + 1, count);
            list.pop();
            // 因为已经排序，所以排出连续两个相同的i
            while (nums[i] === nums[i + 1]) {
                // 跳过重复
                i++;
            }
        }
    }

    exports.subsetsWithDup = subsetsWithDup;

})(window.LeetCode = window.LeetCode || {});