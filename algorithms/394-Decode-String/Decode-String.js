/* 作者: dailc
 * 时间: 2017-09-29
 * 描述: Decode-String
 * 
 * 来自: https://leetcode.com/problems/decode-string
 */
(function(exports) {

    /**
     * @param {string} s
     * @return {string}
     */
    var decodeString = function(s) {
        s = s.replace(/(\d+)\[(\w+)\]/g, function($0, $1, $2) {
            console.log($1);
            console.log($2);
            return (new Array(+$1 + 1)).join($2);
        });
        
        return /\[/.test(s) ? decodeString(s) : s;
    };

    exports.decodeString = decodeString;

})(window.LeetCode = window.LeetCode || {});