/* 作者: dailc
 * 时间: 2017-06-23
 * 描述: Contains-Duplicate-II
 * 
 * 来自: https://leetcode.com/problems/contains-duplicate-ii
 */
(function(exports) {

    /**
     * @param {number[]} containsNearbyDuplicate
     * @param {number} k
     * @return {boolean}
     */
    LeetCode.containsNearbyDuplicate = function(nums, k) {
        if (!nums) {
            return false;
        }

        var hash = {},
            len = nums.length;

        for (var i = 0; i < len; i++) {
            var tmp = nums[i];

            if (hash[tmp]) {
                if (Math.abs(hash[tmp].index - i) <= k) {
                    return true;
                }
            }

            hash[tmp] = {
                index: i
            };
        }

        return false;
    };

})(window.LeetCode = window.LeetCode || {});