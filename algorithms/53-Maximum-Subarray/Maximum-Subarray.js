/**
 * 一刷时间: 2017-04-10
 * 二刷时间：2017-12-10
 * 来自: https://leetcode.com/problems/Maximum-Subarray
 */
(function(exports) {

    /**
     * @param {number[]} nums
     * @return {number}
     */
    function maxSubArray(nums) {
        if (!nums) {
            return -Infinity;
        }
        const len = nums.length;
        let sum = 0;
        let maxSum = -Infinity;

        for (let i = 0; i < len; i++) {
            if (sum < 0) {
                sum = nums[i];
            } else {
                sum += nums[i];
            }

            if (sum > maxSum) {
                maxSum = sum;
            }
        }

        return maxSum;
    }

    exports.maxSubArray = maxSubArray;

})(window.LeetCode = window.LeetCode || {});