/**
 * 一刷时间: 2017-04-20
 * 二刷时间：2018-01-06
 * 来自: https://leetcode.com/problems/remove-duplicates-from-sorted-array-ii
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
        let index = 0;
        let count = 0;

        for (let i = 0; i < len; i++) {
            if (i > 0 && nums[i] === nums[i - 1]) {
                // 存在重复
                count++;
                if (count > 2) {
                    // 大于2后，不再继续赋值，直接跳过，直到接下来找到下一个新的值
                    continue;
                }
            } else {
                // 一个全新的值
                count = 1;
            }
            nums[index++] = nums[i];
        }

        return index;
    }

    exports.removeDuplicates = removeDuplicates;

})(window.LeetCode = window.LeetCode || {});