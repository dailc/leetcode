/**
 * 一刷时间: 2017-04-25
 * 二刷时间：2018-01-17
 * 来自: https://leetcode.com/problems/reverse-linked-list-ii
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
     * @param {number} m
     * @param {number} n
     * @return {ListNode}
     */
    function reverseBetween(head, m, n) {
        if (!head || m === n) {
            return head;
        }

        let index = 1;
        let prev = null;
        // 记录反转链表之前的一个节点
        let before = null;
        // 记录最后一个节点
        let last = null;
        let curr = head;

        while (curr) {
            const next = curr.next;

            if (index >= m && index <= n) {
                // 符合逆转的要求
                curr.next = prev;
                if (index === m) {
                    before = prev;
                    curr.next = null;
                    // 反转后的最后一个
                    last = curr;
                } else if (index === n) {
                    // 反转后的第一个
                    if (before) {
                        // 如果链表前面还存在节点
                        before.next = curr;
                    } else {
                        // 否则代表链表是从头节点开始反转
                        head = curr;
                    }
                    // 最后一个节点指向下一个节点
                    last.next = next;
                }
            }

            prev = curr;
            curr = next;
            index++;
        }

        return head;
    }

    exports.reverseBetween = reverseBetween;

})(window.LeetCode = window.LeetCode || {});