/*
 * 一刷时间: 2017-04-01
 * 二刷时间：2017-11-19
 * 来自: https://leetcode.com/problems/search-in-rotated-sorted-array
 */
(function(exports) {

    /**
     * 二分法-假设没有重复的做法
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    function search(nums, target) {
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
            }

            if (nums[left] <= nums[mid]) {
                // 左半部分有序
                if (nums[left] <= target && target < nums[mid]) {
                    right = mid - 1;
                } else {
                    left = mid + 1;
                }

            } else {
                // 右半部分有序
                if (nums[mid] < target && target <= nums[right]) {
                    left = mid + 1;
                } else {
                    right = mid - 1;
                }
            }
        }

        return -1;
    }

    exports.search = search;

    /**
     * 递归 考虑  1,3,1,1,1 等情况
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    function search2(nums, target) {
        if (!nums) {
            return -1;
        }

        return helper(nums, 0, nums.length - 1, target);
    }

    function helper(nums, left, right, target) {
        if (left > right) {
            return -1;
        }
        const mid = ~~((left + right) / 2);

        if (nums[mid] == target) {
            return mid;
        }

        let leftIndex = -1;
        let rightIndex = -1;

        if (nums[left] <= nums[mid]) {
            // 左边有序
            if (nums[left] <= target && target < nums[mid]) {
                leftIndex = helper(nums, left, mid - 1, target);
            } else {
                leftIndex = helper(nums, mid + 1, right, target);
            }
        }

        if (nums[mid] <= nums[right]) {
            // 右边有序
            if (nums[mid] < target && target <= nums[right]) {
                rightIndex = helper(nums, mid + 1, right, target);
            } else {
                rightIndex = helper(nums, left, mid - 1, target);
            }
        }

        return leftIndex != -1 ? leftIndex : rightIndex;
    }

})(window.LeetCode = window.LeetCode || {});