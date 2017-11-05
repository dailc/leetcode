/*
 * 一刷时间: 2017-03-25
 * 二刷时间：2017-11-05
 * 来自: https://leetcode.com/problems/valid-parentheses
 */
(function(exports) {

    /**
     * @param {string} str
     * @return {boolean}
     */
    exports.isValid = function(str) {
        if (!str) {
            return true;
        }
        if (len & 1) {
            //奇数
            return false;
        }
        var stack = [];

        var index = 0,
            len = str.length;
        while (index < len) {
            var tmp = str.charAt(index);
            var top = stack[0];
            var before = stack[stack.length - 1];
            switch (tmp) {
                case '(':
                    stack.push(tmp);
                    break;
                case '[':
                    stack.push(tmp);
                    break;
                case '{':
                    stack.push(tmp);
                    break;
                case ')':
                    if (top == '(' || before == '(') {
                        stack.pop();
                    } else {
                        return false;
                    }
                    break;
                case ']':
                    if (top == '[' || before == '[') {
                        stack.pop();
                    } else {
                        return false;
                    }
                    break;
                case '}':
                    if (top == '{' || before == '{') {
                        stack.pop();
                    } else {
                        return false;
                    }
                    break;
                default:
                    return false;
            }
            index++;
        }
        if (stack.length) {
            return false;
        }
        return true;

    };

    function isValid(s) {
        if (!s) {
            return true;
        }
        const len = s.length;

        if (len & 1) {
            return false;
        }

        const stack = [];
        let index = 0;

        while (index < len) {
            const top = stack[stack.length - 1];
            const ch = s.charAt(index);
            
            switch (ch) {
                case '(':
                    stack.push('(');
                    break;
                case '[':
                    stack.push('[');
                    break;
                case '{':
                    stack.push('{');
                    break;
                case ')':
                    if (top === '(') {
                        stack.pop();
                    } else {
                        return false;
                    }
                    break;
                case ']':
                    if (top === '[') {
                        stack.pop();
                    } else {
                        return false;
                    }
                    break;
                case '}':
                    if (top === '{') {
                        stack.pop();
                    } else {
                        return false;
                    }
                    break;
                default:
                    return false;
            }

            index++;
        }

        if (stack.length) {
            return false;
        }

        return true;
    };
    
    LeetCode.isValid = isValid;

})(window.LeetCode = window.LeetCode || {});