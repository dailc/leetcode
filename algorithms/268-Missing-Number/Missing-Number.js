/* 作者: dailc
 * 时间: 2017-07-15
 * 描述: Missing-Number
 * 
 * 来自: https://leetcode.com/problems/missing-number
 */
(function(exports) {

    /**
     * 有 n+1 项
     * @param {number[]} nums
     * @return {number}
     */
    var missingNumber = function(nums) {
        if (!nums) {
            return -1;
        }
        var n = nums.length;
        
        var sum = (n * (n + 1) / 2);
        
        for (var i = 0; i < n; i ++) {
            sum -= nums[i];
        }
        
        return sum;
    };

    exports.missingNumber = missingNumber;

})(window.LeetCode = window.LeetCode || {});