/*
 * 一刷时间: 2017-04-02
 * 二刷时间：2017-11-21
 * 来自: https://leetcode.com/problems/search-insert-position
 */
(function(exports) {

    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    function searchInsert(nums, target) {
        if (!nums) {
            return -1;
        }

        const len = nums.length;
        let left = 0;
        let right = len - 1;

        while (left <= right) {
            const mid = ~~((left + right) / 2);

            if (nums[mid] === target) {
                return mid;
            } else if (nums[mid] > target) {
                right = mid - 1;
            } else {
                left = mid + 1;
            }

        }

        return left;
    }

    exports.searchInsert = searchInsert;

})(window.LeetCode = window.LeetCode || {});