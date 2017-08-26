/* 作者: dailc
 * 时间: 2017-08-25
 * 描述: Palindrome-Pairs
 * 
 * 来自: https://leetcode.com/problems/palindrome-pairs
 */
(function(exports) {
    var isPalindrome = function(s) {
        var left = 0,
            right = s.length - 1;
        
        while (left < right) {
            if (s.charAt(left++) !== s.charAt(right--)) {
                return false;
            }
        }
        
        return true;
    };
    
    /**
     * @param {string[]} words
     * @return {number[][]}
     */
    var palindromePairs = function(words) {
        if (!words) {
            return [];
        }
        
        var res = [],
            mp = {},
            len = words.length,
            // 去重
            exists = {};
        
        for (var i = 0; i < len; i++) {
            mp[words[i]] = i;
        }
        
        for (var i = 0; i < len; i++) {
            for (var j = 0; j <= len; j++) {
                var str1 = words[i].substring(0, j);
                var str2 = words[i].substring(j);
                if (isPalindrome(str1)) {
                    var str2rvs = str2.split('').reverse().join('');
                    
                    if (mp[str2rvs] != null && mp[str2rvs] !== i) {
                        var list = [];
                        
                        list.push(mp[str2rvs]);
                        list.push(i);
                        
                        if (!exists[list.join('')]) {
                            res.push(list);
                            exists[list.join('')] = true;
                        }
                    }
                }
                
                if (isPalindrome(str2) && str2.length !== 0) {
                    var str1rvs = str1.split('').reverse().join('');
                    
                    if (mp[str1rvs] != null && mp[str1rvs] !== i) {
                        var list = [];
                        
                        list.push(i);
                        list.push(mp[str1rvs]);
                                                
                        if (!exists[list.join('')]) {
                            res.push(list);
                            exists[list.join('')] = true;
                        }
                    }
                }
                
            }
        }
        
        return res;
    };

    exports.palindromePairs = palindromePairs;

})(window.LeetCode = window.LeetCode || {});