/**
 * 一刷时间: 2017-04-23
 * 二刷时间：2018-01-12
 * 来自: https://leetcode.com/problems/scramble-string
 */
(function(exports) {

    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    function isScramble(s1, s2) {
        if (!s1 || !s2 || s1.length !== s2.length) {
            return false;
        }

        if (s1 === s2) {
            return true;
        }

        const c1 = s1.split('');
        const c2 = s2.split('');
        const len = s1.length;
        const res = [];

        // 初始化
        for (let i = 0; i < len; i++) {
            res[i] = [];
            for (let j = 0; j < len; j++) {
                res[i][j] = [];
            }
        }

        for (let i = 0; i < len; i++) {
            for (let j = 0; j < len; j++) {
                // 先判断一维(表长度)情况下，索引是否匹配
                res[0][i][j] = c1[i] === c2[j];
            }
        }

        for (let k = 2; k <= len; k++) {
            for (let i = len - k; i >= 0; i--) {
                for (let j = len - k; j >= 0; j--) {
                    let r = false;

                    for (let m = 1; m < k && !r; m++) {
                        r = (res[m - 1][i][j] && res[k - m - 1][i + m][j + m]) ||
                            (res[m - 1][i][j + k - m] && res[k - m - 1][i + m][j]);
                    }
                    res[k - 1][i][j] = r;
                }
            }
        }

        return res[len - 1][0][0];
    }

    exports.isScramble = isScramble;

})(window.LeetCode = window.LeetCode || {});