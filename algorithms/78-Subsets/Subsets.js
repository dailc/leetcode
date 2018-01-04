/**
 * 一刷时间: 2017-04-19
 * 二刷时间：2018-01-04
 * 来自: https://leetcode.com/problems/subsets
 */
(function(exports) {

    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    function subsets(nums) {
        if (!nums) {
            return [];
        }
        const res = [];
        const len = nums.length;

        res.push([]);

        for (let i = 1; i <= len; i++) {
            // 依次，0个的，1个的，..个的组合都进行遍历
            // 从小到大确保无重复
            dfs(res, nums, [], 0, i);
        }

        return res;
    }

    function dfs(res, nums, list, from, count) {
        if (list.length === count) {
            res.push(list.slice(0));

            return;
        }

        // 循环的关键是，一直遍历到最后，这样才能找到所有符合条件的组合
        const len = nums.length;

        for (let i = from; i < len; i++) {
            list.push(nums[i]);
            dfs(res, nums, list, i + 1, count);
            list.pop();
        }
    }

    exports.subsets = subsets;

})(window.LeetCode = window.LeetCode || {});