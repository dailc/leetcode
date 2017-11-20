/*
 * 一刷时间: 2017-04-01
 * 二刷时间：2017-11-20
 * 来自: https://leetcode.com/problems/search-for-a-range
 */
(function(exports) {

    /**
     * @description searchRange
     * 二分法-假设没有重复的做法
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    function searchRange(nums, target) {
        if (!nums) {
            return -1;
        }
        const res = [-1, -1];
        let left = 0;
        let right = nums.length - 1;
        let mid = 0;

        while (left <= right) {
            mid = ~~((left + right) / 2);

            if (nums[mid] === target) {
                res[0] = mid;
                res[1] = mid;
                break;
            }

            if (nums[mid] > target) {
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        }

        if (nums[mid] !== target) {
            // 未找到
            return res;
        }

        left = mid;
        while (left > 0 && nums[left] === target) {
            left--;
        }

        if (nums[left] !== target) {
            left++;
        }

        right = mid;
        while (right < nums.length && nums[right] === target) {
            right++;
        }

        if (nums[right] !== target) {
            right--;
        }

        res[0] = left;
        res[1] = right;

        return res;
    }

    exports.searchRange = searchRange;

})(window.LeetCode = window.LeetCode || {});