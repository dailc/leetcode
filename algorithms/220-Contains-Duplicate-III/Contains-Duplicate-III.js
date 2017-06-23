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
        if (!nums) {
            return false;
        }

        var set = new TreeSet(),
            len = nums.length,
            j = 0;

        for (var i = 0; i < len; i++) {
            var n = nums[i];

            if ((set.floor(n) != null && n <= t + set.floor(n)) ||
                (set.ceiling(n) != null && set.ceiling(n) <= t + n)) {
                return true;
            }
                
            set.add(n);
            
            if (i >= k) {
                set.remove(nums[i - k]);
            }
            
            return false;
        }
    };

    function TreeSet() {

    }

})(window.LeetCode = window.LeetCode || {});