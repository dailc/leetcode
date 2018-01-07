/**
 * 一刷时间: 2017-04-21
 * 二刷时间：2018-01-07
 * 来自:https://leetcode.com/problems/search-in-rotated-sorted-array-ii
 */
(function(exports) {

    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {boolean}
     */
    function search(nums, target) {
        if (!nums) {
            return false;
        }

        return searchIndex(nums, 0, nums.length - 1, target) !== -1;
    }

    function searchIndex(nums, left, right, target) {
        if (left > right) {
            return -1;
        }
        const mid = ~~((left + right) / 2);
        const midVal = nums[mid];

        if (midVal === target) {
            return mid;
        }

        let leftIndex = -1;
        let rightIndex = -1;

        // 左边有序，考虑重复数，所以要等于
        if (nums[left] <= midVal) {
            if (nums[left] <= target && target < midVal) {
                // 目标在左边序列
                leftIndex = searchIndex(nums, left, mid - 1, target);
            } else {
                leftIndex = searchIndex(nums, mid + 1, right, target);
            }
        }

        // 如果右边有序，考虑重复值，所以先排出左边已经找到
        if (leftIndex === -1 && midVal <= nums[right]) {
            if (nums[right] >= target && target > midVal) {
                // 目标在右边序列
                rightIndex = searchIndex(nums, mid + 1, right, target);
            } else {
                rightIndex = searchIndex(nums, left, mid - 1, target);
            }
        }

        return leftIndex !== -1 ? leftIndex : rightIndex;
    }

    exports.search = search;

})(window.LeetCode = window.LeetCode || {});