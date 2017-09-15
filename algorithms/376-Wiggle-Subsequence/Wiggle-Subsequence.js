/* 作者: dailc
 * 时间: 2017-09-13
 * 描述: Wiggle-Subsequence
 * 
 * 来自: https://leetcode.com/problems/wiggle-subsequence
 */
(function(exports) {
    
    var wiggleMaxLength = function(nums) {
        if (nums.length <= 1) {
            return nums.length;
        }
        
        var count = 1,
            prevInc,
            len = nums.length;
            
        for (var i = 0; i < len; i++) {
            if (nums[i] > nums[i - 1] && (prevInc === undefined || prevInc === -1)) {
                prevInc = 1;
                count++;
            } else if (nums[i] < nums[i - 1] && (prevInc === undefined || prevInc === 1)) {
                prevInc = -1;
                count++;
            }
        }
        
        return count;
    };

    

    exports.wiggleMaxLength = wiggleMaxLength;

})(window.LeetCode = window.LeetCode || {});