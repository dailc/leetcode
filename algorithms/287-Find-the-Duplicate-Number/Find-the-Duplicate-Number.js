/* 作者: dailc
 * 时间: 2017-07-23
 * 描述: Find-the-Duplicate-Number
 * 
 * 来自: https://leetcode.com/problems/find-the-duplicate-number
 */
(function(exports) {

    /**
     * @param {number[]} nums
     * @return {number}
     */
    var findDuplicate = function(nums) {
        var slow = 0,
            fast = 0,
            find = 0;
        
        // 找到快慢指针相遇的地方
        do {
            slow = nums[slow];
            fast = nums[nums[fast]];
        } while (slow != fast);
        
        // 用一个新指针从头开始，直到和慢指针相遇
        while (find != slow) {
            slow = nums[slow];
            find = nums[find];
        }
        
        return find;
    };
    
    var findDuplicate2 = function(nums) {
        var low = 1,
            len = nums.length,
            high = len - 1;
        
        while (low < high) {
            var mid = low + ~~((high - low) / 2);
            
            var count = 0;
            
            for (var i = 0; i < len; i++) {
                if (nums[i] <= mid) {
                    count ++;
                }
            }
            
            if (count <= mid) {
                low = mid + 1;
            } else {
                high = mid;
            }
        }
        
        return low;
    };
 
    exports.findDuplicate = findDuplicate;
    exports.findDuplicate2 = findDuplicate2;

})(window.LeetCode = window.LeetCode || {});