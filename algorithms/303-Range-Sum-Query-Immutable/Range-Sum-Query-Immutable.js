/* 作者: dailc
 * 时间: 2017-08-01
 * 描述: Range-Sum-Query-Immutable
 * 
 * 来自: https://leetcode.com/problems/range-sum-query-immutable
 */
(function(exports) {

    /**
     * @param {number[]} nums
     */
    var NumArray = function(nums) {
        this.nums = nums;
        
        var sum = [],
            len = nums && nums.length;
        
        for (var i = 0; i < len; i++) {
            sum[i] = nums[i];
            
            if (i > 0) {
                sum[i] += sum[i - 1];
            }
        }
        
        
        this.sum = sum;
    };

    /** 
     * @param {number} i 
     * @param {number} j
     * @return {number}
     */
    NumArray.prototype.sumRange = function(i, j) {
        return i == 0 ? this.sum[j] : (this.sum[j] - this.sum[i - 1]);
    };
    exports.NumArray = NumArray;

})(window.LeetCode = window.LeetCode || {});