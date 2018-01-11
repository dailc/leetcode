/**
 * 一刷时间: 2017-04-23
 * 二刷时间：2018-01-11
 * 来自: https://leetcode.com/problems/maximal-rectangle
 */
(function(exports) {

    /**
     * Definition for singly-linked list.
     * function ListNode(val) {
     *     this.val = val;
     *     this.next = null;
     * }
     */
    /**
     * @param {ListNode} head
     * @param {number} x
     * @return {ListNode}
     */
    function partition(head, x) {
        if (!head) {
            return head;
        }
        const lesserHeader = {};
        const greaterHeader = {};
        let lesser = lesserHeader;
        let greater = greaterHeader;
        let currNode = head;

        while (currNode) {
            const next = currNode.next;

            if (currNode.val < x) {
                lesser.next = currNode;
                lesser = lesser.next;
                lesser.next = null;
            } else {
                greater.next = currNode;
                greater = greater.next;
                greater.next = null;
            }

            currNode = next;
        }

        lesser.next = greaterHeader.next;

        return lesserHeader.next;
    }
    
    exports.partition = partition;

})(window.LeetCode = window.LeetCode || {});