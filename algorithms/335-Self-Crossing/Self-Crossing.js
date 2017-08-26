/* 作者: dailc
 * 时间: 2017-08-24
 * 描述: Self-Crossing
 * 
 * 来自: https://leetcode.com/problems/self-crossing
 */
(function(exports) {
    /**
     * @param {number[]} x
     * @return {boolean}
     */
    var isSelfCrossing = function(x) {
        if (!x) {
            return false;
        }

        for (var i = 3, len = x.length; i < len; i++) {
            // 4-1相交
            if (x[i] >= x[i - 2] && x[i - 3] >= x[i - 1]) {
                return true;
            }
            // 5-1重合
            if (i >= 4 && x[i - 1] == x[i - 3] && x[i] >= x[i - 2] - x[i - 4]) {
                return true;
            }
            // 6-1相交
            if (i >= 5 && x[i - 2] >= x[i - 4] && x[i - 3] >= x[i - 1] && x[i - 1] >= x[i - 3] - x[i - 5] && x[i] >= x[i - 2] - x[i - 4]) {
                return true;
            }
        }
        
        return false;
    };

    exports.isSelfCrossing = isSelfCrossing;

})(window.LeetCode = window.LeetCode || {});