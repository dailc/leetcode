/*
 * 一刷时间: 2017-03-28
 * 二刷时间：2017-11-14
 * 来自: https://leetcode.com/problems/implement-strstr
 */
(function(exports) {

    /**
     * @param {string} haystack
     * @param {string} needle
     * @return {number}
     */
    function strStr(haystack, needle) {
        if (!needle) {
            return 0;
        }
        if (!haystack) {
            return -1;
        }

        const lenH = haystack.length;
        const lenN = needle.length;

        for (let i = 0; i < lenH; i += 1) {
            const ch = haystack.charAt(i);

            if (needle.charAt(0) === ch) {
                let isFound = true;

                for (let j = 1; j < lenN; j += 1) {
                    if (haystack.charAt(i + j) !== needle.charAt(j)) {
                        isFound = false;
                        break;
                    }
                }

                if (isFound) {
                    return i;
                }
            }

        }

        return -1;
    }

    exports.strStr = strStr;

    /**
     * strStr kmp算法
     * @param {string} haystack
     * @param {string} needle
     * @return {number}
     */
    function strStr2(haystack, needle) {
        if (!needle) {
            return 0;
        }
        if (!haystack) {
            return -1;
        }

        const lenH = haystack.length;
        const lenN = needle.length;
        const lps = kmpprocess(needle);
        
        for (let i = 0, j = 0; i < lenH;) {
            if (haystack.charAt(i) == needle.charAt(j)) {
                i++;
                j++;
            }
            if (j == lenN) {
                return i - j;
            }
            if (i < lenH && haystack.charAt(i) != needle.charAt(j)) {
                if (j) {
                    j = lps[j - 1];
                } else {
                    i++;
                }
            }
        }
        return -1;
    }

    exports.strStr2 = strStr2;

    function kmpprocess(needle) {
        const len = needle.length;
        const lps = [];
        
        lps[0] = 0;
        for (let i = 1, count = 0; i < len;) {
            if (needle.charAt(i) == needle.charAt(count)) {
                lps[i++] = ++count;
            } else if (count) {
                count = lps[count - 1];
            } else {
                lps[i++] = 0;
            }
        }
        return lps;
    }

})(window.LeetCode = window.LeetCode || {});