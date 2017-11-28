/*
 * 一刷时间: 2017-04-04
 * 二刷时间：2017-11-27
 * 来自: https://leetcode.com/problems/first-missing-positive
 */
(function(exports) {

    /**
     * 把正数n放在第n-1个位置
     * @param {number[]} nums
     * @return {number}
     */
    function firstMissingPositive(nums) {
        if (!nums || nums.length < 1) {
            return 1;
        }
        const len = nums.length;

        for (let i = 0; i < len; i++) {
            // 用while是因为可能有多次交换
            while (nums[i] > 0 && nums[i] !== i + 1 && nums[i] - 1 < len && nums[nums[i] - 1] !== nums[i]) {
                const tmp = nums[nums[i] - 1];

                nums[nums[i] - 1] = nums[i];
                nums[i] = tmp;
            }
        }

        for (let i = 0; i < len; i++) {
            if (nums[i] !== i + 1) {
                // nums[0] !== 1, loose 1
                return i + 1;
            }
        }

        return len + 1;
    }
    exports.firstMissingPositive = firstMissingPositive;

})(window.LeetCode = window.LeetCode || {});