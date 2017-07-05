/* 作者: dailc
 * 时间: 2017-07-05
 * 描述: Delete-Node-in-a-Linked-List
 * 
 * 来自: https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree
 */
(function(exports) {
    function ListNode(val) {
        this.val = val;
        this.next = null;
    }
    LeetCode.ListNode = ListNode;

    /**
     * @param {ListNode} node
     * @return {void} Do not return anything, modify node in-place instead.
     */
    var deleteNode = function(node) {
        
        if (node && node.next) {
            node.val = node.next.val;
            node.next = node.next.next;
        }
        
    };

    exports.deleteNode = deleteNode;

})(window.LeetCode = window.LeetCode || {});