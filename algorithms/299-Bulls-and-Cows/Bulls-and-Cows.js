/* 作者: dailc
 * 时间: 2017-07-28
 * 描述: Bulls-and-Cows
 * 
 * 来自: https://leetcode.com/problems/find-median-from-data-stream
 */
(function(exports) {

    /**
     * @param {string} secret
     * @param {string} guess
     * @return {string}
     */
    var getHint = function(secret, guess) {
        if (secret == null || guess == null || secret.length != guess.length) {
            return "";
        }
        
        var countA = 0,
            countB = 0,
            count = [],
            lenS = secret.length,
            lenG = guess.length;
            
        for (var i = 0; i < 10; i ++) {
            count[i] = 0;
        }
        
        for (var i = 0; i < lenS; i ++) {
            if (secret.charAt(i) == guess.charAt(i)) {
                countA ++;
            } else {
                count[secret.charAt(i) - 0] ++;
                if (count[secret.charAt(i) - 0] <= 0) {
                    countB ++;
                }
                count[guess.charAt(i) - 0] --;
                if (count[guess.charAt(i) - 0] >= 0) {
                    countB ++;
                }
            }
        }
        
        return countA + 'A' + countB + 'B';
    };

    exports.getHint = getHint;

})(window.LeetCode = window.LeetCode || {});