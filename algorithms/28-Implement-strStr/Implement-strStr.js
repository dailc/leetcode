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
                    // 关键的，回到前面相同长度的前缀地方那去，从而重写从后匹配
                    j = lps[j - 1];
                } else {
                    // j中没有重复前缀，i往后挪移
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
                // 往后回溯，减少共同前后缀的匹配范围，直至最后回溯到0
                count = lps[count - 1];
            } else {
                // 此时前后缀共同长度为0
                lps[i++] = 0;
            }
        }
        return lps;
    }

})(window.LeetCode = window.LeetCode || {});