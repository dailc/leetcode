/* 作者: dailc
 * 时间: 2017-09-10
 * 描述: Super-Pow
 * 
 * 来自: https://leetcode.com/problems/super-pow
 */
(function(exports) {
    
    var moreThanZero = function(x) {
        for (var i = x.length; i >= 0; i--) {
            if (x[i] > 0) {
                return true;
            }
        }
        
        return false;
    };
    
    // 高精度除法
    var divide = function(x, y) {
        var tmp = 0,
            len = x.length;
        
        for (var i = 0; i < len; i++) {
            x[i] += tmp * 10;
            tmp = x[i] % y;
            x[i] = ~~(x[i] / y);
        }
    };
    
    var superPow = function(a, b) {
        if (!moreThanZero(b)) {
            return 1;
        }

        var MOD_VALUE = 1337;
        var isEven = false,
            len = b.length;
        
        a = a % MOD_VALUE;
        if (b[len - 1] % 2 === 0) {
            isEven = true;
        }
        divide(b, 2);
        
        var res = superPow(a, b);
        
        res %= MOD_VALUE;
        res *= res;
        res %= MOD_VALUE;
        
        if (!isEven) {
            res *= a;
            res %= MOD_VALUE;
        }
        
        return res;
    };
    
    

    exports.superPow = superPow;

})(window.LeetCode = window.LeetCode || {});