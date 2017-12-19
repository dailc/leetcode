/**
 * 一刷时间: 2017-04-12
 * 二刷时间：2017-12-18
 * 来自: https://leetcode.com/problems/Rotate-List
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
     * @param {number} k
     * @return {ListNode}
     */
    function rotateRight(head, k) {
        if (k < 0 || !head) {
            return head;
        }

        let len = 1;
        let tmp = head;

        while (tmp.next) {
            len++;
            tmp = tmp.next;
        }

        k %= len;

        if (k === 0) {
            return head;
        }

        const size = len - k;
        let suffix;
        let count = 1;

        if (size > 0) {
            suffix = head;
            // 后缀遍历
            tmp = head;

            while (tmp && count < size) {
                count++;
                tmp = tmp.next;
            }
        }

        if (tmp) {
            // 找到前缀
            let prefix = tmp.next;

            // 切断后缀和前缀联系
            tmp.next = null;
            // 重新遍历前缀，准备拼接
            tmp = prefix;

            while (tmp.next) {
                tmp = tmp.next;
            }
            // 拼接
            tmp.next = suffix;

            return prefix;
        } else {
            return head;
        }
    }

    exports.rotateRight = rotateRight;

})(window.LeetCode = window.LeetCode || {});