/**
 * 一刷时间: 2017-04-18
 * 二刷时间：2018-01-01
 * 来自: https://leetcode.com/problems/sort-colors
 */
(function(exports) {

    /**
     * @param {number[]} nums
     * @return {void} Do not return anything, modify nums in-place instead.
     */
    function sortColors(nums) {
        if (!nums) {
            return;
        }
        const len = nums.length;
        let start = 0;
        let end = len - 1;
        let index = 0;

        while (index < len) {
            const color = nums[index];

            if (color === 0) {
                if (index > start) {
                    swap(nums, start++, index);
                } else {
                    index++;
                }
            } else if (color === 2) {
                if (index < end) {
                    swap(nums, end--, index);
                } else {
                    // 已经完成
                    return;
                }
            } else {
                // 为1，不需要替换
                index++;
            }
        }
    }

    function swap(nums, i, j) {
        const tmp = nums[i];

        nums[i] = nums[j];
        nums[j] = tmp;
    }

    exports.sortColors = sortColors;

})(window.LeetCode = window.LeetCode || {});