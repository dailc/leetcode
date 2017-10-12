/* 作者: dailc
 * 时间: 2017-10-12
 * 描述: Binary-Watch
 * 
 * 来自: https://leetcode.com/problems/binary-watch
 */
(function(exports) {
    
    function dfs(nums, count, pos, out, res) {
        if (count === 0) {
            res.push(out);
            return;
        }
        var len = nums.length;
        
        for (var i = pos; i < len; i++) {
            dfs(nums, count - 1, i + 1, out + nums[i], res);
        }
    }
    
    function generate(nums, count) {
        var res = [];
        
        dfs(nums, count, 0, 0, res);
        
        return res;
    }

    /**
     * @param {number} num
     * @return {string[]}
     */
    var readBinaryWatch = function(num) {
        var res = [];
        var hour = [8, 4, 2, 1];
        var minute = [32, 16, 8, 4, 2, 1];
        
        for (var i = 0; i <= num; i++) {
            var hours = generate(hour, i);
            var minutes = generate(minute, num - i);
            for (var indexH in hours) {
                var h = hours[indexH];
                
                if (h > 11) {
                    continue;
                }
                for (var indexM in minutes) {
                    var m = minutes[indexM];
                    
                    if (m > 59) {
                        continue;
                    }
                    res.push(h + (m < 10 ? ':0' : ':') + m);
                }
            }
        }
        
        return res;
    };

    exports.readBinaryWatch = readBinaryWatch;

})(window.LeetCode = window.LeetCode || {});