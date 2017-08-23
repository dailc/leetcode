/* 作者: dailc
 * 时间: 2017-08-23
 * 描述: Increasing-Triplet-Subsequence
 * 
 * 来自: https://leetcode.com/problems/increasing-triplet-subsequence
 */
(function(exports) {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    var increasingTriplet = function(nums) {
        if (!nums) {
            return false;
        }
        var MAX_VALUE = 2147483647;
        
        var minNum1 = MAX_VALUE,
            minNum2 = MAX_VALUE,
            len = nums.length;
        
        for (var i = 0; i < len; i++) {
            var item = nums[i];
            
            if (item <= minNum1) {
                minNum1 = item;
            } else if (item <= minNum2) {
                minNum2 = item;
            } else {
                return true;
            }
        }
        
        return false;
    };
    exports.increasingTriplet = increasingTriplet;

})(window.LeetCode = window.LeetCode || {});