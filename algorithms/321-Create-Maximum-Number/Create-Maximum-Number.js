/* 作者: dailc
 * 时间: 2017-08-13
 * 描述: Create-Maximum-Number
 * 
 * 来自: https://leetcode.com/problems/create-maximum-number
 */
(function(exports) {
    var maxArray = function(nums, k) {
        var len = nums.length,
            result = [];
        
        for (var i = 0, j = 0; i < len; i++) {
            while (len - i + j > k && j > 0 && result[j - 1] < nums[i]) {
                j --;
            }
            
            if (j < k) {
                result[j++] = nums[i];
            }
        }
        
        return result;
    };
    
    var greater = function(nums1, i, nums2, j) {
        var len1 = nums1.length,
            len2 = nums2.length;
            
            
        while (i < len1 && j < len2 && nums1[i] === nums2[j]) {
            i++;
            j++;
        }
        
        return j === len2 || (i < len1 && nums1[i] > nums2[j]);
    };
    
    var merge = function(nums1, nums2, k) {
        var ans = [],
            i = 0,
            j = 0;
        
        for (var r = 0; r < k; r++) {
            if (greater(nums1, i, nums2, j)) {
                ans[r] = nums1[i++];
            } else {
                ans[r] = nums2[j++];
            }
        }
        
        return ans;
    };
    /**
     * @param {number[]} nums1
     * @param {number[]} nums2
     * @param {number} k
     * @return {number[]}
     */
    var maxNumber = function(nums1, nums2, k) {
        var m = nums1.length,
            n = nums2.length,
            res = [];
            
        for (var i = Math.max(k - n, 0); i <= k && i <= m; i++) {
            var v1 = maxArray(nums1, i);
            var v2 = maxArray(nums2, k - i);
            
            var candidate = merge(v1, v2, k);
            
            if (greater(candidate, 0, res, 0)) {
                res = candidate;
            }
        }
        
        return res;
    };
    exports.maxNumber = maxNumber;

})(window.LeetCode = window.LeetCode || {});