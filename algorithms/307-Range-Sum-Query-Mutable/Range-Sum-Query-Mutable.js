/* 作者: dailc
 * 时间: 2017-08-04
 * 描述: Range-Sum-Query-Mutable
 * 
 * 来自: https://leetcode.com/problems/range-sum-query-mutable
 */
(function(exports) {
    /**
     * @param {number[]} nums
     */
    var NumArray = function(nums) {
        this.nums = nums;

        var dp = [],
            len = nums && nums.length;

        for (var i = 0; i < len; i++) {
            dp[i] = nums[i];

            if (i > 0) {
                dp[i] += dp[i - 1];
            }
        }

        this.dp = dp;
        
    };

    /** 
     * @param {number} i 
     * @param {number} val
     * @return {void}
     */
    NumArray.prototype.update = function(i, val) {
        var len = this.dp.length;
        
        if (i < 0 || i > len - 1) {
            return ;
        }
        var diff = val - this.nums[i];
        
        this.nums[i] = val;
        
        for (var j = i; j < len; j++) {
            this.dp[j] += diff;
        }
        
    };

    /** 
     * @param {number} i 
     * @param {number} j
     * @return {number}
     */
    NumArray.prototype.sumRange = function(i, j) {
        return i == 0 ? this.dp[j] : (this.dp[j] - this.dp[i - 1]);
    };

    exports.NumArray = NumArray;

})(window.LeetCode = window.LeetCode || {});