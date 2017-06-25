/* 作者: dailc
 * 时间: 2017-06-25
 * 描述: Basic-Calculator
 * 
 * 来自: https://leetcode.com/problems/basic-calculator
 */
(function(exports) {

    /**
     * @param {string} s
     * @return {number}
     */
    LeetCode.calculate = function(s) {
        return calculateRecurse(s);
    };

    function calculateRecurse(s) {
        if (!s) {
            return 0;
        }
        var index = 0,
            len = s.length,
            res = 0,
            // 默认为加号
            symbol = 1;

        while (index < len) {
            var ch = s.charAt(index);

            if (ch == '(') {
                // 准备进入递归
                index++;
                // count是(括号的数量，遇到)则-1
                var count = 1,
                    // 子字符串不包含第一个(
                    subtr = '';

                while (count) {
                    var ch = s.charAt(index);

                    if (ch == '(') {
                        count++;
                    } else if (ch == ')') {
                        count--;
                    }

                    // 最后一个如果已经是最后一个括号了，过滤掉
                    subtr += count ? ch : '';
                    index++;
                }

                res += symbol * calculateRecurse(subtr);
            } else {
                if (ch == '+') {
                    symbol = 1;
                } else if (ch == '-') {
                    symbol = -1;
                } else if (ch >= '0' && ch <= '9') {
                    // 普通数字，一直找到不是数字为止
                    var num = ch - 0,
                        nextIndex = index + 1,
                        chNext = s.charAt(nextIndex);

                    while (chNext >= '0' && chNext <= '9') {
                        num = 10 * num + (chNext - 0);

                        // index也要变化，因为多取了一个字符
                        index++;
                        nextIndex++;
                        chNext = s.charAt(nextIndex);
                    }

                    res += symbol * num;
                } else if (ch == ' ') {

                } else {
                    throw new Error('错误，表达式包含非法字符!');
                }

                index++;
            }
        }

        return res;
    }

    LeetCode.calculate2 = function(s) {
        if (!s) {
            return 0;
        }
        var index = 0,
            len = s.length,
            res = 0,
            // 默认为加号
            symbol = 1,
            stack = [];

        while (index < len) {
            var ch = s.charAt(index);

            if (ch == '(') {
                stack.push(res);
                stack.push(symbol);
                res = 0;
                symbol = 1;
            } else if (ch == ')') {
                // 符号，数值
                res *= stack.pop();
                res += stack.pop();
            } else {
                if (ch == '+') {
                    symbol = 1;
                } else if (ch == '-') {
                    symbol = -1;
                } else if (ch >= '0' && ch <= '9') {
                    // 普通数字，一直找到不是数字为止
                    var num = ch - 0,
                        nextIndex = index + 1,
                        chNext = s.charAt(nextIndex);

                    while (chNext >= '0' && chNext <= '9') {
                        num = 10 * num + (chNext - 0);

                        // index也要变化，因为多取了一个字符
                        index++;
                        nextIndex++;
                        chNext = s.charAt(nextIndex);
                    }

                    res += symbol * num;
                } else if (ch == ' ') {

                } else {
                    throw new Error('错误，表达式包含非法字符!');
                }
            }

            index++;
        }

        return res;
    };

})(window.LeetCode = window.LeetCode || {});