/*
 * 一刷时间: 2017-03-31
 * 二刷时间：2017-11-18
 * 来自: https://leetcode.com/problems/longest-valid-parentheses
 */
(function(exports) {

    /**
     * @param {string} s
     * @return {number}
     */
    function longestValidParentheses(s) {
        if (!s) {
            return 0;
        }

        const len = s.length;
        const stack = [];
        let maxLen = 0;

        for (let i = 0; i < len; i++) {
            // 左括号，压栈
            const ch = s.charAt(i);

            if (ch === '(') {
                stack.push({
                    index: i,
                    symbol: '(',
                });
            } else {
                // 如果栈顶是左括号
                if (stack.length && stack[stack.length - 1].symbol === '(') {
                    let currLen = 0;

                    stack.pop();

                    // 可以确保 减去一些无效的i(比如前面的')')
                    if (!stack.length) {
                        currLen = i + 1;
                    } else {
                        currLen = i - stack[stack.length - 1].index;
                    }

                    maxLen = Math.max(maxLen, currLen);
                } else {
                    // 否则栈顶是右括号或者是空栈，则将右括号也push进栈，它的坐标将方便之后计算长度
                    stack.push({
                        index: i,
                        symbol: ')',
                    });
                }
            }
        }

        return maxLen;
    }

    /**
     * @param {string} s
     * @return {number}
     */
    function longestValidParentheses2(s) {
        if (!s) {
            return 0;
        }
        s = replaceWithSpecialCh(s);

        const len = s.length;
        let maxLen = 0;
        let currLen = 0;

        for (let i = 0; i < len; i++) {
            const ch = s.charAt(i);

            if (ch === '#') {
                currLen++;

                maxLen = Math.max(maxLen, currLen);
            } else {
                currLen = 0;
            }
        }

        return maxLen;
    }

    function replaceWithSpecialCh(s) {
        const len = s.length;
        let isChange = false;

        for (let i = 1; i < len; i++) {
            const start = s.charAt(i - 1);

            if (start !== '(') {
                continue;
            }

            for (let j = i; j < len; j++) {
                const ch = s.charAt(j);

                if (ch === '#') {
                    // 特殊字符，跳过
                    continue;
                } else if (ch === ')') {
                    // 替换(为#,i-1被替换了
                    s = s.substring(0, i - 1) + '#' + s.substring(i);
                    // 替换),j
                    s = s.substring(0, j) + '#' + s.substring(j + 1);
                    isChange = true;
                    break;
                } else {
                    // 非法字符，跳出循环
                    break;
                }
            }
        }

        if (isChange) {
            return replaceWithSpecialCh(s);
        } else {
            return s;
        }
    }

    /**
     * @param {string} s
     * @return {number}
     */
    function longestValidParentheses3(s) {
        if (!s) {
            return 0;
        }
        const len = s.length;
        const dp = [];
        let maxLen = 0;

        for (let i = len - 2; i >= 0; i--) {
            const ch = s.charAt(i);

            if (ch === '(') {
                const end = i + (dp[i + 1] || 0) + 1;

                if (end < len && s.charAt(end) === ')') {
                    dp[i] = (dp[i + 1] || 0) + 2;
                    if (end + 1 < len) {
                        // 最大长度要加上dp[end + 1]的有效长度
                        dp[i] += (dp[end + 1] || 0);
                    }
                }
            }

            maxLen = Math.max(maxLen, (dp[i] || 0));
        }

        return maxLen;
    }

})(window.LeetCode = window.LeetCode || {});