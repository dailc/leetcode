/* 作者: dailc
 * 时间: 2017-07-31
 * 描述: Remove-Invalid-Parentheses
 * 
 * 来自: https://leetcode.com/problems/remove-invalid-parentheses
 */
(function(exports) {

    /**
     * @param {string} s
     * @return {string[]}
     */
    var removeInvalidParentheses = function(s) {
        if (!s) {
            return [""];
        }
        
        var res = [],
            visited = [],
            queue = [],
            len = s.length,
            found = false;
            
        queue.push(s);
        visited[s] = 1;
        
        while(queue.length) {
            var tmp = queue.pop();
            
            if (isValid(tmp)) {
                res.push(tmp);
                found = true;
            }
            
            if (found) {
                continue;
            }
            
            len = tmp.length;
            
            for (var i = 0; i < len; i++) {
                var ch = tmp.charAt(i);
                
                if (ch != '(' && ch != ')') {
                    continue;
                }
                var next = tmp.substr(0, i) + tmp.substr(i + 1);
                if (!visited[next]) {
                    console.log(next);
                    queue.unshift(next);
                    visited[next] = 1;
                }
            }
        }
        
        return res;
    };
    
    function isValid(str) {
        if (!str) {
            return true;
        }
        
        var count = 0,
            len = str.length;
            
        for (var i = 0; i < len; i++) {
            var tmp = str.charAt(i);
            
            if (tmp == '(') {
                count ++;
            } else if (tmp == ')' && count-- == 0) {
                return false;
            }
        }
        
        return count == 0;
    }

    exports.removeInvalidParentheses = removeInvalidParentheses;

})(window.LeetCode = window.LeetCode || {});