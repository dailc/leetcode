/**
 * 一刷时间: 2017-04-21
 * 二刷时间：2018-01-08
 * 来自:https://leetcode.com/problems/remove-duplicates-from-sorted-list-ii
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
    function deleteDuplicates(head) {
        if (!head) {
            return null;
        }
        if (!head.next) {
            return head;
        }
        let curr;

        if (head.val === head.next.val) {
            curr = head.next.next;

            while (curr && curr.val === head.val) {
                curr = curr.next;
            }

            return deleteDuplicates(curr);
        } else {
            curr = head.next;
            head.next = deleteDuplicates(curr);
        }

        return head;
    }

    exports.deleteDuplicates = deleteDuplicates;

})(window.LeetCode = window.LeetCode || {});