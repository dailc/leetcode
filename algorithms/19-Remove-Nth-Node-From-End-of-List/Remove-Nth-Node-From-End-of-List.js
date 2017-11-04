/* 
 * 一刷时间: 2017-03-25
 * 二刷时间：2017-11-04
 * 来自: https://leetcode.com/problems/remove-nth-node-from-end-of-list
 */
(function(exports) {

    /**
     * @param {ListNode} head
     * @param {number} n
     * @return {ListNode}
     */
    function removeNthFromEnd(head, n) {
        const stack = [];

        let tmp = head;

        while (tmp) {
            stack.push(tmp);
            tmp = tmp.next;
        }

        let curr;
        let before;

        while (n) {
            curr = stack.pop();

            if (!curr) {
                return head;
            }
            n--;
        }
        before = stack.pop();

        if (before) {
            before.next = curr.next;
        } else if (curr) {
            return curr.next;
        }

        return head;
    };

})(window.LeetCode = window.LeetCode || {});