/*
 * 一刷时间: 2017-03-31
 * 二刷时间：2017-11-17
 * 来自: https://leetcode.com/problems/next-permutation
 */
(function(exports) {

    /**
     * @param {number[]} nums
     * @return {void} Do not return anything, modify nums in-place instead.
     */
    function nextPermutation(nums) {
        if (!nums) {
            return [];
        }

        const len = nums.length;
        let index = 0;

        for (let i = len - 1; i > 0; i--) {
            if (nums[i - 1] < nums[i]) {
                // 从右到左第一个减序
                for (let j = len - 1; j >= i; j--) {
                    if (nums[j] > nums[i - 1]) {
                        // 交换第一个满足的
                        const tmp = nums[j];

                        nums[j] = nums[i - 1];
                        nums[i - 1] = tmp;
                        break;
                    }
                }
                // 记录翻转开始的序号
                index = i;
                break;
            }
        }

        let left = index;
        let right = len - 1;

        while (left < right) {
            const tmp = nums[left];

            nums[left] = nums[right];
            nums[right] = tmp;

            left++;
            right--;
        }
    };

    exports.nextPermutation = nextPermutation;

})(window.LeetCode = window.LeetCode || {});