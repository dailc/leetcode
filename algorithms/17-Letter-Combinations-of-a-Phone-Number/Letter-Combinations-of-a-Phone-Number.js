/* 
 * 一刷时间: 2017-03-24
 * 二刷时间：2017-11-02
 * 来自: https://leetcode.com/problems/letter-combinations-of-a-phone-number
 */
(function(exports) {

    /**
     * @param {string} digits
     * @return {string[]}
     */
    function letterCombinations(digits) {
        if (!digits) {
            return [];
        }

        const res = [];
        const comb = [];

        dfs(res, comb, digits, 0);

        return res;
    }
    
    exports.letterCombinations = letterCombinations;

    function dfs(res, comb, digits, index) {
        if (index > digits.length - 1) {
            res.push(comb.join(''));

            return;
        }
        const candidates = map(digits.charAt(index));
        const lenN = candidates.length;

        for (let j = 0; j < lenN; j += 1) {
            comb.push(candidates.charAt(j));
            dfs(res, comb, digits, index + 1);
            comb.pop();
        }
    }

    function map(num) {
        switch (num) {
            case '0':
                return '';
            case '1':
                return '';
            case '2':
                return 'abc';
            case '3':
                return 'def';
            case '4':
                return 'ghi';
            case '5':
                return 'jkl';
            case '6':
                return 'mno';
            case '7':
                return 'pqrs';
            case '8':
                return 'tuv';
            case '9':
                return 'wxyz';
        }

        return '';
    }

})(window.LeetCode = window.LeetCode || {});