/*
 * 一刷时间: 2017-03-27
 * 二刷时间：2017-11-09
 * 来自: https://leetcode.com/problems/swap-nodes-in-pairs
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
     * @return {ListNode}
     */
    function swapPairs(head) {
        if (!head) {
            return head;
        }
        if (!head.next) {
            return head;
        }

        const before = head;
        const cur = before.next;
        const next = cur.next;

        cur.next = before;
        before.next = swapPairs(next);

        return cur;
    };

    LeetCode.swapPairs = swapPairs;

})(window.LeetCode = window.LeetCode || {});