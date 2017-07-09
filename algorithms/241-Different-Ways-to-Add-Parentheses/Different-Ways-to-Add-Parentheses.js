/* 作者: dailc
 * 时间: 2017-07-09
 * 描述: Different-Ways-to-Add-Parentheses
 * 
 * 来自: https://leetcode.com/problems/different-ways-to-add-parentheses
 */
(function(exports) {

    /**
     * @param {string} input
     * @return {number[]}
     */
    var diffWaysToCompute = function(input) {
        if (!input) {
            return [];
        }
        var mp = [];
        
        return diffWaysToComputeRecurse(input, mp);
    };
    
    function diffWaysToComputeRecurse(input, mp) {
        var res = [],           
            len = input.length;

        for (var i = 0; i < len; i++) {
            var ch = input.charAt(i);
            if (ch === '+' || ch === '-' || ch === '*') {
                var left = input.substr(0, i),
                    right = input.substr(i + 1);

                var leftRes = [],
                    rightRes = [];

                if (mp[left]) {
                    leftRes = mp[left];
                } else {
                    leftRes = diffWaysToComputeRecurse(left, mp);
                }

                if (mp[right]) {
                    rightRes = mp[right];
                } else {
                    rightRes = diffWaysToComputeRecurse(right, mp);
                }
                
                var len1 = leftRes.length,
                    len2 = rightRes.length;
                    
                for (var j = 0; j < len1; j ++) {
                    for (var k = 0; k < len2; k ++) {
                        if (ch == '+') {
                            res.push(leftRes[j] + rightRes[k]);
                        } else if (ch == '-') {
                            res.push(leftRes[j] - rightRes[k]);
                        }  else if (ch == '*') {
                            res.push(leftRes[j] * rightRes[k]);
                        } 
                    }
                }
            }
        }
        
        if (!res.length) {
            // 纯数字
            res.push(input - 0);
        }
        // 结果加入map
        mp[input] = res;
        
        return res;
    }

    exports.diffWaysToCompute = diffWaysToCompute;

})(window.LeetCode = window.LeetCode || {});