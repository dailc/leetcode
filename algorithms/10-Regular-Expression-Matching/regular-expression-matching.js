/* 
 * 一刷时间: 2017-03-06
 * 二刷时间：2017-10-16
 * 来自: https://leetcode.com/problems/regular-expression-matching
 */
(function(exports) {

    // 注意 "" 匹配 ".*" 也应该返回true
    function isMatch(s, p) {
        return isMatchRecursely(s, p, 0, 0);
    }

    function isMatchRecursely(s, p, si, pi) {
        const lenS = s.length;
        const lenP = p.length;

        if (pi === lenP) {
            return si === lenS;
        }

        // 判断如果p的下一位不是*
        if (pi === lenP - 1 ||
            p.charAt(pi + 1) !== '*') {
            if (s.charAt(si) === p.charAt(pi) ||
                p.charAt(pi) === '.') {
                return isMatchRecursely(s, p, si + 1, pi + 1);
            } else {
                return false;
            }
        }

        // 下面的全部是下一位是*的情况
        while (si < lenS &&
            (p.charAt(pi) === '.' ||
                s.charAt(si) === p.charAt(pi))) {
            // 有*号的情况，要判断除去改* 号 0,1,2...N个数的情况
            if (isMatchRecursely(s, p, si, pi + 2)) {
                return true;
            }
            // 一轮一轮的判断，从0,1,2,...开始
            si++;
        }
        
        // 跳过p中的 x* 情况
        return isMatchRecursely(s, p, si, pi + 2);
    }

    exports.isMatch = isMatch;

    /**
     * @description 
     * 正在表达式匹配
     * @param {String} string
     * @param {String} pattern
     * @return {Boolean} 
     */
    exports.isMatch2 = function(str, pattern) {
        // 注意 "" 匹配 ".*" 也应该返回true
        return isMatchRecursely2(str, pattern, 0, 0);
    };

    // 递归法
    function isMatchRecursely2(str, pattern, sIndex, pIndex) {
        if (pIndex === pattern.length) {
            return sIndex === str.length;
        }
        //如果p是最后一位，否则p的下一位不是*
        if (pIndex === pattern.length - 1 || pattern.charAt(pIndex + 1) !== '*') {
            if (str.charAt(sIndex) === pattern.charAt(pIndex) ||
                pattern.charAt(pIndex) === '.') {
                return isMatchRecursely2(str, pattern, sIndex + 1, pIndex + 1);
            } else {
                return false;
            }
        }

        //否则p的下一位是*
        //如果刚好str里面又满足条件
        while (sIndex < str.length &&
            (pattern.charAt(pIndex) === '.' ||
                str.charAt(sIndex) === pattern.charAt(pIndex))) {
            //有*号的情况，要判断除去改* 号 1,2...N个数的情况
            if (isMatchRecursely2(str, pattern, sIndex, pIndex + 2)) {
                return true;
            }
            sIndex++;
        }

        //跳过 当前判断字符和*
        return isMatchRecursely2(str, pattern, sIndex, pIndex + 2);
    }

})(window.LeetCode = window.LeetCode || {});