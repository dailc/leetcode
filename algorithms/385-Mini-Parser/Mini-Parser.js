/* 作者: dailc
 * 时间: 2017-09-21
 * 描述: Mini-Parser
 * 
 * 来自: https://leetcode.com/problems/mini-parser
 */
(function(exports) {
    /**
     * // This is the interface that allows for creating nested lists.
     * // You should not implement it, or speculate about its implementation
     * */
    function NestedInteger() {

        //      Return true
        //      if this NestedInteger holds a single integer, rather than a nested list.
        //      @return {
        //          boolean
        //      }
        this.isInteger = function() {

        };

        //      Return the single integer that this NestedInteger holds,
        //      if it holds a single integer
        //      Return null
        //      if this NestedInteger holds a nested list
        //      @return {
        //          integer
        //      }
        this.getInteger = function() {

        };

        //      Set this NestedInteger to hold a single integer equal to value.
        //      @return {
        //          void
        //      }
        this.setInteger = function(value) {

        };

        //      Set this NestedInteger to hold a nested list and adds a nested integer elem to it.
        //      @return {
        //          void
        //      }
        this.add = function(elem) {

        };

        //      Return the nested list that this NestedInteger holds,
        //      if it holds a nested list
        //      Return null
        //      if this NestedInteger holds a single integer
        //      @return {
        //          NestedInteger[]
        //      }
        this.getList = function() {

        };
    };

    /**
     * @param {string} s
     * @return {NestedInteger}
     */
    var deserialize = function(s) {
        if (!s.length) {
            return NestedInteger();
        }
        if (s.charAt(0) !== '[') {
            return NestedInteger(parseInt(s, 10));
        }
        if (s.length <= 2) {
            return NestedInteger();
        }
        
        var res = [];
        var start = 1;
        var count = 0;
        var len = s.length;
        
        for (var i = 1; i < len; i++) {
            var ch = s.charAt(i);
            
            if (count === 0 && (ch === ',' || i === len - 1)) {
                res.push(deserialize(s.substr(start, i - start)));
            } else if (ch === '[') {
                count++;
            } else if (ch === ']') {
                count--;
            }
        }
        
        return res;
    };

    exports.deserialize = deserialize;

})(window.LeetCode = window.LeetCode || {});