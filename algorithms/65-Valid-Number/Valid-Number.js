/**
 * 一刷时间: 2017-04-14
 * 二刷时间：2017-12-22
 * 来自: https://leetcode.com/problems/minimum-path-sum
 */
(function(exports) {

    /** 有限状态机,游戏AI算法常用到
     * @param {string} s
     * @return {boolean}
     */
    function isNumber(s) {
        if (!s) {
            return s;
        }

        // 定义枚举状态
        const INVALID = 0;
        const SPACE = 1;
        const SIGN = 2;
        const DIGIT = 3;
        const DOT = 4;
        const EXPONENT = 5;

        // 定义转换表,8个状态，6种输入类别分别可以进行转换
        const transitionTable = [
            [-1, 0, 3, 1, 2, -1], // 0 
            [-1, 8, -1, 1, 4, 5], // 1
            [-1, -1, -1, 4, -1, -1], // 2
            [-1, -1, -1, 1, 2, -1], // 3
            [-1, 8, -1, 4, -1, 5], // 4
            [-1, -1, 6, 7, -1, -1], // 5
            [-1, -1, -1, 7, -1, -1], // 6
            [-1, 8, -1, 7, -1, -1], // 7
            [-1, 8, -1, -1, -1, -1] // 8
        ];

        const getInputType = function(ch) {
            if (ch === ' ') {
                return SPACE;
            } else if (ch === '+' || ch === '-') {
                return SIGN;
            } else if (ch >= '0' && ch <= '9') {
                return DIGIT;
            } else if (ch === '.') {
                return DOT;
            } else if (ch === 'e' || ch === 'E') {
                return EXPONENT;
            }

            return INVALID;
        };

        const len = s.length;
        let index = 0;
        let state = 0;

        while (index < len) {
            const ch = s.charAt(index);
            const inputType = getInputType(ch);

            state = transitionTable[state][inputType];

            if (state === -1) {
                return false;
            }

            index++;
        }

        return state === 1 || state === 4 || state === 7 || state === 8;
    }

    exports.isNumber = isNumber;

})(window.LeetCode = window.LeetCode || {});