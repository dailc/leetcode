/*
 * 一刷时间: 2017-04-05
 * 二刷时间：2017-11-29
 * 来自: https://leetcode.com/problems/multiply-strings
 */
(function(exports) {

    /**
     * @param {string} num1
     * @param {string} num2
     * @return {string}
     */
    function multiply(num1, num2) {
        if (!num1 || !num2) {
            return '0';
        }

        const len1 = num1.length;
        const len2 = num2.length;
        const lenPos = len1 + len2;
        const pos = [];

        for (let i = 0; i < lenPos; i++) {
            pos[i] = 0;
        }

        for (let i = len1 - 1; i >= 0; i--) {
            const n1 = +num1.charAt(i);

            for (let j = len2 - 1; j >= 0; j--) {
                const n2 = +num2.charAt(j);

                const multi = n1 * n2;
                // num1[i] * num2[j] 应该对应的位置[i + j`, `i + j + 1]
                const p1 = i + j;
                const p2 = i + j + 1;
                // 要加上进位本身的值
                const sum = multi + pos[p2];

                // 进位后剩下的
                pos[p2] = sum % 10;
                // 下一位需要加上进位
                pos[p1] += ~~(sum / 10);
            }
        }

        let res = pos.join('');
        let index = 0;

        while (index < lenPos - 1) {
            // 最后一位可以是0
            if (res.charAt(0) === '0') {
                res = res.substr(1);
            }
            index++;
        }

        return res;
    }

    exports.multiply = multiply;

})(window.LeetCode = window.LeetCode || {});