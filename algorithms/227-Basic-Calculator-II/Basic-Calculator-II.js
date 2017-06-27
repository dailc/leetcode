/* 作者: dailc
 * 时间: 2017-06-27
 * 描述: Basic-Calculator-II
 * 
 * 来自: https://leetcode.com/problems/basic-calculator-ii
 */
(function(exports) {

    /**
     * @param {string} s
     * @return {number}
     */
    LeetCode.calculate = function(s) {
        if (!s) {
            return 0;
        }
        var index = 0,
            len = s.length,
            res = 0,
            num = 0,
            sign = '+',
            stack = [];

        while (index < len) {
            var ch = s.charAt(index);

            if (ch >= '0' && ch <= '9') {
                num = num * 10 + (ch - 0);
            }

            if ((!(ch >= '0' && ch <= '9') && ch != ' ') || index == len - 1) {
                if (sign == '+') {
                    stack.push(num);
                } else if (sign == '-') {
                    stack.push(-num);
                } else if (sign == '*') {
                    stack.push(stack.pop() * num);
                } else if (sign == '/') {
                    stack.push(~~(stack.pop() / num));
                }
                sign = ch;
                num = 0;
            }

            index++;
        }

        for (var i = 0, len = stack.length; i < len; i++) {
            res += stack[i];
        }

        return res + num;
    };

})(window.LeetCode = window.LeetCode || {});