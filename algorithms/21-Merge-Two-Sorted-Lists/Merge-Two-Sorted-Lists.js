/*
 * 一刷时间: 2017-03-26
 * 二刷时间：2017-11-06
 * 来自: https://leetcode.com/problems/merge-two-sorted-lists
 */
(function(exports) {

    /**
     * @param {ListNode} l1
     * @param {ListNode} l2
     * @return {ListNode}
     */
    function mergeTwoLists(l1, l2) {
        if (!l1) {
            return l2;
        }
        if (!l2) {
            return l1;
        }

        let mergeHead;

        if (l1.val < l2.val) {
            mergeHead = l1;
            mergeHead.next = mergeTwoLists(l1.next, l2);
        } else {
            mergeHead = l2;
            mergeHead.next = mergeTwoLists(l2.next, l1);
        }

        return mergeHead;
    };

    exports.mergeTwoLists = mergeTwoLists;

})(window.LeetCode = window.LeetCode || {});