/* 作者: dailc
 * 时间: 2017-07-06
 * 描述: Product-of-Array-Except-Self
 * 
 * 来自: https://leetcode.com/problems/product-of-array-except-self
 */
(function(exports) {

    /**
     * @param {ListNode} node
     * @return {void} Do not return anything, modify node in-place instead.
     */
    var productExceptSelf = function(nums) {
        var res = [],
            len = nums.length,
            // right的数字，直接存在临时变量中即可
            right = 1;
        
        res[0] = 1;
        // 前面乘积的数组
        for (var i = 1; i < len; i ++) {
            res[i] = res[i - 1] * nums[i - 1];
        }
        
        for (var i = len - 1; i >= 0; i --) {
            res[i] *= right;
            right *= nums[i];
        }
        
        return res;
    };

    exports.productExceptSelf = productExceptSelf;

})(window.LeetCode = window.LeetCode || {});