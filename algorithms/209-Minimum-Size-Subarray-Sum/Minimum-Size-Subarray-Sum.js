/* 作者: dailc
 * 时间: 2017-06-15
 * 描述: Course-Schedule
 * 
 * 来自: https://leetcode.com/problems/course-schedule
 */
(function(exports) {
 
    /**
     * minSubArrayLen
     * @param {number} s
     * @param {number[]} nums
     * @return {number}
     */
    LeetCode.minSubArrayLen = function(s, nums) {
        if(!nums || nums.length == 0) {
            return 0;
        }
        var MAX_VALUE = 2147483647;
        var p1 = 0,
            p2 = 0,
            sum = 0,
            len = nums.length,
            min = MAX_VALUE;
        
        while (p1 < len) {
            sum += nums[p1 ++];
            
            while(sum >= s) {
                // 找到一个
                min = Math.min(min, p1 - p2);
                // 减去一个
                sum -= nums[p2 ++];
            }
        }
        
        return min === MAX_VALUE ? 0 : min;
    };
    
    LeetCode.minSubArrayLen2 = function(s, nums) {
        if(!nums || nums.length == 0) {
            return 0;
        }
        var MAX_VALUE = 2147483647;
        var sums = [],
            len = nums.length,
            min = MAX_VALUE;
        
        sums[0] = 0;
        for (var i = 1; i < len + 1; i ++) {
            
            sums[i] = sums[i - 1] + nums[i - 1];
        }
        
        for (var i = 0; i < len + 1; i ++) {
            var end = binarySearch(i + 1, len, sums[i] + s, sums);
            
            if(end == len + 1) {
                break;
            }
            
            min = Math.min(end - i, min);
        }
        
        return min === MAX_VALUE ? 0 : min;        
    };
    
    
    function binarySearch(low, high, key, sums) {
        while (low <= high) {
            var mid = ~~((low + high) / 2);
            
            if(sums[mid] >= key) {
                high = mid - 1;
            } else {
                low = mid + 1;
            }
        }
        
        return low;
    }

})(window.LeetCode = window.LeetCode || {});