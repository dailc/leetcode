/*
 * 一刷时间: 2017-03-27
 * 二刷时间：2017-11-12
 * 来自: https://leetcode.com/problems/remove-duplicates-from-sorted-array
 */
(function(exports) {

    /**
     * @param {number[]} nums
     * @return {number}
     */
    function removeDuplicates(nums) {
        if (!nums) {
            return 0;
        }

        const len = nums.length;
        let resIndex = 1;

        for (let i = 1; i < len; i += 1) {
            if (nums[i] !== nums[i - 1]) {
                nums[resIndex++] = nums[i];
            }
        }

        return resIndex;
    };

    exports.removeDuplicates = removeDuplicates;

})(window.LeetCode = window.LeetCode || {});