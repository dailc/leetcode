/*
 * 一刷时间: 2017-03-26
 * 二刷时间：2017-11-08
 * 来自: https://leetcode.com/problems/merge-k-sorted-lists
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
     * @param {ListNode[]} lists
     * @return {ListNode}
     */
    function mergeKLists(lists) {
        if (!lists || !lists.length) {
            return null;
        }
        let len = lists.length;

        while (len > 1) {
            const k = Math.floor((len + 1) / 2);
            const mid = Math.floor((len) / 2);

            for (let i = 0; i < mid; i++) {
                lists[i] = mergeTwoList(lists[i], lists[i + k]);
            }

            len = k;
        }

        return lists[0];
    };

    function mergeTwoList(list1, list2) {
        if (!list1) {
            return list2;
        }

        if (!list2) {
            return list1;
        }

        let mergeHeader;

        if (list1.val < list2.val) {
            mergeHeader = list1;
            mergeHeader.next = mergeTwoList(list1.next, list2);
        } else {
            mergeHeader = list2;
            mergeHeader.next = mergeTwoList(list2.next, list1);
        }

        return mergeHeader;
    }

})(window.LeetCode = window.LeetCode || {});