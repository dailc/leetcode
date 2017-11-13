/*
 * 一刷时间: 2017-03-28
 * 二刷时间：2017-11-13
 * 来自: https://leetcode.com/problems/remove-element
 */
(function(exports) {

    /**
     * @param {number[]} nums
     * @param {number} val
     * @return {number}
     */
    function removeElement(nums, val) {
        if (!nums) {
            return 0;
        }

        const len = nums.length;
        let index = 0;

        for (let i = 0; i < len; i += 1) {
            if (nums[i] !== val) {
                nums[index++] = nums[i];
            }
        }

        return index;
    };

    exports.removeElement = removeElement;

})(window.LeetCode = window.LeetCode || {});