/* 作者: dailc
 * 时间: 2017-08-21
 * 描述: Verify-Preorder-Serialization-of-a-Binary-Tree
 * 
 * 来自: https://leetcode.com/problems/verify-preorder-serialization-of-a-binary-tree
 */
(function(exports) {

    var isValidSerialization = function(preorder) {
        if (!preorder) {
            return false;
        }
        
        var streams = preorder.split(',');
        
        var count = 0,
            len = streams.length;
        
        for (var i = 0; i < len - 1; i++) {
            if (streams[i] == '#') {
                if (count == 0) {
                    return false;
                }
                count--;
            } else {
                count++;
            }
        }
        
        return count !== 0 ? false : (streams.pop() == '#');
    };
    exports.isValidSerialization = isValidSerialization;

})(window.LeetCode = window.LeetCode || {});