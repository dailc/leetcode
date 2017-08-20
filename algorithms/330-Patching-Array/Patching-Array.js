/* 作者: dailc
 * 时间: 2017-08-20
 * 描述: Patching-Array
 * 
 * 来自: https://leetcode.com/problems/patching-array
 */
(function(exports) {

    var minPatches = function(nums, n) {
        var count = 0,
            i = 0,
            known_sum = 1,
            len = nums.length;
            
        while (known_sum <= n) {
            if (i < len && nums[i] <= known_sum) {
                known_sum += nums[i++];
            } else {
                known_sum += known_sum;
                // 移位操作容易有溢出
                //known_sum <<= 1;  
                count++;
            }
        }
        
        return count;
    };
    exports.minPatches = minPatches;

})(window.LeetCode = window.LeetCode || {});