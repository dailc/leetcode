/* 作者: dailc
 * 时间: 2017-06-23
 * 描述: Contains-Duplicate-III
 * 
 * 来自: https://leetcode.com/problems/contains-duplicate-iii
 */
(function(exports) {

    /**
     * @param {number[]} containsNearbyDuplicate
     * @param {number} k
     * @param {number} t
     * @return {boolean}
     */
    LeetCode.containsNearbyDuplicate = function(nums, k, t) {
        if (!nums) {
            return false;
        }

        var len = nums.length;

        for (var i = 0; i < len; i++) {
            for (var j = 0; j < len; j++) {
                if (i != j && Math.abs(i - j) <= k && Math.abs(nums[i] - nums[j]) <= t) {
                    return true;
                }
            }
        }

        return false;
    };

    LeetCode.containsNearbyDuplicate2 = function(nums, k, t) {
        if (!nums || k < 1 || t < 0) {
            return false;
        }

        var mp = {},
            len = nums.length,
            MIN_VALUE = -2147483648;

        for (var i = 0; i < len; i++) {
            var remappedNum = nums[i] - MIN_VALUE;
            var bucket = ~~(remappedNum / (t + 1));
            
            if (mp[bucket] != null
            ||  (mp[bucket - 1] != null && remappedNum - mp[bucket - 1] <= t)
            ||  (mp[bucket + 1] != null && mp[bucket + 1] - remappedNum <= t)
            ) {
                return true;
            }
            
            if (getLen(mp) >= k) {
                var lastBucket = ~~((nums[i - k] - MIN_VALUE) / (t + 1));
                
                mp[lastBucket] = undefined;
            }
            
            mp[bucket] = remappedNum;
        }
        
        return false;
    };
    
    function getLen(obj) {
        var size = 0;
        
        for (var key in obj) {
            if (obj.hasOwnProperty(key)) {
                size ++;
            }
        }
        
        return size;
    }


})(window.LeetCode = window.LeetCode || {});