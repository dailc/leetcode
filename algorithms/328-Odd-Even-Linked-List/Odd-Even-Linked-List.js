/* 作者: dailc
 * 时间: 2017-08-18
 * 描述: Odd-Even-Linked-List
 * 
 * 来自: https://leetcode.com/problems/power-of-three
 */
(function(exports) {
    function ListNode(val) {
        this.val = val;
        this.next = null;
    }

    var oddEvenList = function(head) {
        if (!head) {
            return head;
        }
        var odd = head,
            even = head.next,
            evenHead = even;
            

        while (even && even.next) {
            var next = even.next;
            
            odd.next = next;
            odd = odd.next;
            
            // 偶数->奇数->偶数
            even.next = next.next;
            even = even.next;
        }
        
        odd.next = evenHead;
        
        return head;
    };
    exports.ListNode = ListNode;
    exports.oddEvenList = oddEvenList;

})(window.LeetCode = window.LeetCode || {});