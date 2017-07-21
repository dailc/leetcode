/* 作者: dailc
 * 时间: 2017-07-21
 * 描述: Expression-Add-Operators
 * 
 * 来自: https://leetcode.com/problems/expression-add-operators
 */
(function(exports) {

    /**
     * @param {string} num
     * @param {number} target
     * @return {string[]}
     */
    var addOperators = function(num, target) {
        var res = [];
        
        dfs(res, num, "", 0, 0, 0, target);
        
        return res;
    };
    
    function dfs(res, num, path, pos, sum, lastNum, target) {
        var len = num.length;
        
        if (pos == len && sum == target) {
            res.push(path);
            return ;
        } else if (pos >= len) {
            return ;
        } else {
            for (var i = pos; i < len; i ++) {
                if (i != pos && num.charAt(pos) == '0') {
                    break;
                }
                var currNum = parseInt(num.substring(pos, i + 1));
                
                if (pos == 0) {
                    dfs(res, num, path + "" + currNum, i + 1, currNum, currNum, target);
                } else {
                    dfs(res, num, path + "+" + currNum, i + 1,
                        sum + currNum, currNum, target);
                        
                    dfs(res, num, path + "-" + currNum, i + 1,
                        sum - currNum, -currNum, target);
                        
                    dfs(res, num, path + "*" + currNum, i + 1,
                        sum - lastNum + lastNum * currNum, lastNum * currNum, target);
                }
            }
        }
    }
  

    exports.addOperators = addOperators;

})(window.LeetCode = window.LeetCode || {});