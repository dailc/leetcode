/* 作者: dailc
 * 时间: 2017-08-27
 * 描述: Counting-Bits
 * 
 * 来自: https://leetcode.com/problems/counting-bits
 */
(function(exports) {

    function ListNode(val) {
        this.val = val;
        this.next = null;
    }

    function dfs(head, nestedList) {
        if (nestedList.isInteger()) {
            // 这是最后一个数了，设置完后遍历也结束了
            head.next = new ListNode(nestedList.getInteger());

            // 下一个节点
            return head.next;
        } else {
            var list = nestedList.getList(),
                len = list.length;

            // 列表
            for (var i = 0; i < len; i++) {
                head = dfs(head, list[i]);
            }

            return head;
        }
    }

    /**
     * @constructor
     * @param {NestedInteger[]} nestedList
     */
    var NestedIterator = function(nestedList) {
        this.listHead = {};
        this.node = this.listHead;
        
        var tmpHead = this.listHead;
        
        for (var i = 0, len = nestedList.length; i < len; i++) {
            tmpHead = dfs(tmpHead, nestedList[i]);
        }
    };

    /**
     * @this NestedIterator
     * @returns {boolean}
     */
    NestedIterator.prototype.hasNext = function() {
        return !!this.node.next;
    };

    /**
     * @this NestedIterator
     * @returns {integer}
     */
    NestedIterator.prototype.next = function() {
        var next = this.node.next;

        this.node = next;

        return next.val;
    };

    exports.NestedIterator = NestedIterator;

})(window.LeetCode = window.LeetCode || {});