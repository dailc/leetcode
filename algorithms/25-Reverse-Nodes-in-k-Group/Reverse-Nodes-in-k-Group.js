/*
 * 一刷时间: 2017-03-27
 * 二刷时间：2017-11-10
 * 来自: https://leetcode.com/problems/remove-duplicates-from-sorted-array
 */
(function(exports) {

    /**
     * @param {ListNode} head
     * @param {number} k
     * @return {ListNode}
     */
    function reverseKGroup(head, k) {
        if (!head || k <= 1) {
            return head;
        }

        let count = 0;
        let curr = head;

        while (curr && count < k) {
            count++;
            curr = curr.next;
        }

        if (count < k) {
            return head;
        }

        curr = reverseKGroup(curr, k);

        // 本次k个节点的翻转
        while (count-- > 0) {
            const tmp = head.next;
            // 首节点指向反转链表的最后一个节点
            head.next = curr;
            // curr指针继续指向反转链表的头指针
            curr = head;
            // 下一个交换
            head = tmp;
        }

        // 交换完毕后,curr指针仍然是指向反转链表的首节点的
        head = curr;

        return head;
    };
    exports.reverseKGroup = reverseKGroup;

})(window.LeetCode = window.LeetCode || {});