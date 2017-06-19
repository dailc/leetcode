/* 作者: dailc
 * 时间: 2017-06-19
 * 描述: Shortest-Palindrome
 * 
 * 来自: https://leetcode.com/problems/word-search-ii
 */
(function(exports) {

    /**
     * @param {string} s
     * @return {string}
     */
    LeetCode.shortestPalindrome = function(s) {
        if (!s) {
            return s;
        }
        var len = s.length,
            index = 0;

        for (var i = len - 1; i >= 0; i--) {
            if (isPalindrome(s.substr(0, i + 1))) {
                index = i;
                break;
            };
        }

        var addStr = '';

        // 添加字符
        for (var i = index + 1; i < len; i++) {
            addStr = s.charAt(i) + addStr;
        }

        return addStr + s;
    };

    function isPalindrome(s) {
        if (!s) {
            return true;
        }
        var len = s.length;
        var left = 0,
            right = len - 1;
        while (left < right) {
            var leftC = s.charAt(left).toLowerCase();
            var rightC = s.charAt(right).toLowerCase();
            if (leftC != rightC) {
                return false;
            } else {
                left++;
                right--;
            }
        }

        return true;
    }

    LeetCode.shortestPalindrome2 = function(s) {
        var r = s.split('').reverse().join('');
        var t = s + '#' + r;
        var next = [],
            len = t.length;

        for (var i = 0; i < len; i++) {
            next[i] = 0;
        }

        for (var i = 1; i < len; i++) {
            var j = next[i - 1];
            while (j > 0 && t.charAt(i) != t.charAt(j)) {
                j = next[j - 1];
            }
            j += (t.charAt(i) === t.charAt(j)) ? 1 : 0;
            next[i] = j;
        }

        return r.substring(0, s.length - next[len - 1]) + s;
    };

})(window.LeetCode = window.LeetCode || {});