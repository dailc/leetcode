/* 作者: dailc
 * 时间: 2017-07-19
 * 描述: First-Bad-Version
 * 
 * 来自: https://leetcode.com/problems/first-bad-version
 */
(function(exports) {

    /**
     * @param {function} isBadVersion()
     * @return {function}
     */
    var solution = function(isBadVersion) {
        /**
         * @param {integer} n Total versions
         * @return {integer} The first bad version
         */
        return function(n) {
            if (!n || n < 0) {
                return 0;
            }
            
            var left = 1,
                right = n,
                res = left;
                
            while (left < right) {
                var mid = ~~((left + right) / 2);
                
                if (isBadVersion(mid)) {
                    right = mid;
                } else {
                    left = mid + 1;
                }
            }
            
            return left;
        };
    };

    exports.solution = solution;

})(window.LeetCode = window.LeetCode || {});