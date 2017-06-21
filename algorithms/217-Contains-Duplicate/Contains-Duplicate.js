/* 作者: dailc
 * 时间: 2017-06-21
 * 描述: Contains-Duplicate
 * 
 * 来自: https://leetcode.com/problems/contains-duplicate
 */
(function(exports) {

    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    LeetCode.containsDuplicate   = function(nums) {
        if (!nums) {
            return false;
        }
        var hash = {},
            len = nums.length;
        
        for (var i = 0; i < len; i ++) {
            var tmp = nums[i];
            
            if (hash[tmp]) {
                return true;
            } else {
                hash[tmp] = 1;
            }
        }
        
        return false;
    };


})(window.LeetCode = window.LeetCode || {});