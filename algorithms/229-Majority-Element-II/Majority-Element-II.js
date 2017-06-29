/* 作者: dailc
 * 时间: 2017-06-29
 * 描述: Majority-Element-II
 * 
 * 来自: https://leetcode.com/problems/majority-element-ii
 */
(function(exports) {

    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    LeetCode.majorityElement = function(nums) {
        var res = [];
        
        var m = 0,
            n = 0,
            cm = 0,
            cn = 0,
            len = nums.length;
        
        for (var i = 0; i < len; i ++) {
            var item = nums[i];
            
            if (item == m) {
                cm ++;
            } else if (item == n) {
                cn ++;
            } else if (cm == 0) {
                m = item;
                cm = 1;
            }  else if (cn == 0) {
                n = item;
                cn = 1;
            } else {
                cm --;
                cn --;
            }
        }
        
        cm = 0;
        cn = 0;
        
        for (var i = 0; i < len; i ++) {
            var item = nums[i];
            
            if (item == m) {
                cm ++;
            } else if (item == n) {
                cn ++;
            }
        }

        if (cm > (len / 3)) {
            res.push(m);
        }
        if (cn > (len / 3)) {
            res.push(n);
        }
        
        return res;
    };

})(window.LeetCode = window.LeetCode || {});