/* 作者: dailc
 * 时间: 2017-06-23
 * 描述: Contains-Duplicate-III
 * 
 * 来自: https://leetcode.com/problems/contains-duplicate-iii
 */
(function(exports) {

    /**
     * @param {number[]} containsNearbyDuplicate
     * @param {number} k
     * @param {number} t
     * @return {boolean}
     */
    LeetCode.containsNearbyDuplicate = function(nums, k, t) {
        if (!nums) {
            return false;
        }

        var hash = {},
            len = nums.length;

        for (var i = 0; i < len; i++) {
            for (var j = 0; j < len; j++) {
                if (i!=j && Math.abs(i - j) <= k && Math.abs(nums[i] - nums[j]) <= t) {
                    return true;
                }
            }
        }

        return false;
    };

})(window.LeetCode = window.LeetCode || {});