/* 作者: dailc
 * 时间: 2017-06-14
 * 描述: Reverse-Linked-List
 * 
 * 来自: https://leetcode.com/problems/isomorphic-strings
 */
(function(exports) {
    function ListNode(val) {
        this.val = val;
        this.next = null;
    }
    LeetCode.ListNode = ListNode;
    
    /**
     * @description reverseList
     * @param {ListNode} head
     * @return {ListNode}
     */
    LeetCode.reverseList = function(head) {
        return reverseListRecurse(head);
    };
    
    // 要画图理解
    function reverseListRecurse(head, newHead) {
        if(!head) {
            return newHead;
        } 
        var next = head.next;
        
        head.next = newHead;
        
        return reverseListRecurse(next, head);
    }
    
    LeetCode.reverseList2 = function(head) {
        if(!head) {
            return head;
        }
        
        var prev = null,
            curr = head;
            
        while(curr) {
            var next = curr.next;
            
            curr.next = prev;
            prev = curr;
            curr = next;
        }
        
        return prev;
    };
    
    
    
   
    

})(window.LeetCode = window.LeetCode || {});