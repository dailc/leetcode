/* 作者: dailc
 * 时间: 2017-08-03
 * 描述: Additive-Number
 * 
 * 来自: https://leetcode.com/problems/additive-number
 */
(function(exports) {
    var add = function(a, b) {
        if (!a || !b) {
            return '';
        }
        var len1 = a.length,
            len2 = b.length;

        var maxStr = len1 > len2 ? a : b;
        var minLen = Math.min(len1, len2);
        var maxLen = Math.max(len1, len2);

        var carry = 0;
        //后续反转
        var result = [];
        for (var i = 0; i < minLen; i++) {
            var tmp = (a.charAt(len1 - 1 - i) - '') + (b.charAt(len2 - 1 - i) - '') + carry;
            result[i] = tmp % 10;
            carry = Math.floor(tmp / 10);
        }
        for (var i = 0; i < maxLen - minLen; i++) {
            var tmp = (maxStr.charAt(maxLen - minLen - 1 - i) - '') + carry;
            result[minLen + i] = tmp % 10;
            carry = Math.floor(tmp / 10);
        }
        if (carry != 0) {
            result.push(carry);
        }

        return result.reverse().join('');
    };

    var dfs = function(num, num1, num2) {
        if (!num || num.length == 0) {
            return false;
        }
        
        var len = num.length;
        
        for (var i = 0; i < len; i++) {
            var x = num.substr(0, i + 1);
            
            if (x == add(num1, num2)) {
                if (i == len - 1) {
                    return true;
                }
                return dfs(num.substr(i + 1), num2, x);
            }
        }
        
        return false;
    };

    /**
     * @param {string} num
     * @return {boolean}
     */
    var isAdditiveNumber = function(num) {
        if (!num || num.length < 3) {
            return false;
        }
        
        var len = num.length,
            num1,
            num2;
            
        for (var i = 0; i < len - 2; i++) {
            num1 = num.substr(0, i + 1);
            for (var j = i + 1; j < len - 1; j++) {
                num2 = num.substr(i + 1, j - i);
                
                if (dfs(num.substr(j + 1), num1, num2)) {                  
                    return true;
                }
                if (num[i + 1] == '0') {
                    break;
                }
            }
            if (num[0] == '0') {
                break;
            }
        }
        
        return false;
    };

    exports.isAdditiveNumber = isAdditiveNumber;
    exports.add = add;

})(window.LeetCode = window.LeetCode || {});