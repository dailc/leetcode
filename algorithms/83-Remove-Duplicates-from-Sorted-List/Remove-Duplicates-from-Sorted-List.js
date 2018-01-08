/**
 * 一刷时间: 2017-04-22
 * 二刷时间：2018-01-08
 * 来自:https://leetcode.com/problems/remove-duplicates-from-sorted-list
 */
(function(exports) {
    /**
     * Definition for singly-linked list.
     * function ListNode(val) {
     *     this.val = val;
     *     this.next = null;
     * }
     */
    function deleteDuplicates(head) {
        if (!head) {
            return null;
        }
        if (!head.next) {
            return head;
        }
        let curr;

        if (head.val === head.next.val) {
            curr = head.next;

            while (curr && curr.next && curr.next.val === head.val) {
                curr = curr.next;
            }

            return deleteDuplicates(curr);
        } else {
            curr = head.next;
            head.next = deleteDuplicates(curr);
        }

        return head;
    }

    /**
     * Definition for singly-linked list.
     * function ListNode(val) {
     *     this.val = val;
     *     this.next = null;
     * }
     */
    function deleteDuplicates2(head) {
        if (!head) {
            return null;
        }
        if (!head.next) {
            return head;
        }
        let before = head;
        let curr = head.next;

        while (curr) {
            if (curr.val === before.val) {
                before.next = curr.next;
            } else {
                before = curr;
            }
            curr = curr.next;
        }

        return head;
    }
    exports.deleteDuplicates2 = deleteDuplicates2;

})(window.LeetCode = window.LeetCode || {});