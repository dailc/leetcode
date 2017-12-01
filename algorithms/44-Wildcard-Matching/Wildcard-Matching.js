/*
 * 一刷时间: 2017-04-06
 * 二刷时间：2017-11-30
 * 来自: https://leetcode.com/problems/wildcard-matching
 */
(function(exports) {

    /**
     * @param {string} s
     * @param {string} p
     * @return {boolean}
     */
    function isMatch(s, p) {
        if (!s && !p) {
            return true;
        }

        const lenS = s.length;
        const lenP = p.length;
        let isPreFound = false;
        let prePIndex = 0;
        let preSIndex = 0;
        let pIndex = 0;
        let sIndex = 0;

        while (sIndex < lenS) {
            const chS = s.charAt(sIndex);
            const chP = p.charAt(pIndex);

            if (chP === '?') {
                pIndex++;
                sIndex++;
            } else if (chP === '*') {
                prePIndex = ++pIndex;
                preSIndex = sIndex;
                isPreFound = true;
            } else {
                if (chS === chP) {
                    pIndex++;
                    sIndex++;
                } else if (isPreFound) {
                    pIndex = prePIndex;
                    sIndex = ++preSIndex;
                } else {
                    return false;
                }
            }
        }

        while (p.charAt(pIndex) === '*') {
            pIndex++;
        }

        return pIndex === lenP;
    }

    exports.isMatch = isMatch;

})(window.LeetCode = window.LeetCode || {});