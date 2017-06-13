/* 作者: dailc
 * 时间: 2017-06-13
 * 描述: 203-Remove-Linked-List-Elements
 * 
 * 来自: https://leetcode.com/problems/remove-linked-list-elements
 */
(function(exports) {
    function ListNode(val) {
        this.val = val;
        this.next = null;
    }
    LeetCode.ListNode = ListNode;
    /**
     * @description removeElements
     * @param {ListNode} head
     * @param {number} val
     * @return {ListNode}
     */
    LeetCode.removeElements = function(head, val) {
        return removeElementsRecurse(head, val);
    };
    
    
    function removeElementsRecurse(head, val) {
        if(!head) {
            return head;
        }
        
        head.next = removeElementsRecurse(head.next, val);
        
        return head.val == val ? head.next : head;
    }
    
    LeetCode.removeElements2 = function(head, val) {
        if(!head) {
            return head;
        }
        
        var newHead = {};
        
        newHead.next = head;
        
        var curr = head,
            prev = newHead;
        
        while(curr) {
            if(curr.val == val) {
                prev.next = curr.next;
            } else {
                prev = prev.next;
            }
            
            curr = curr.next;
        }
        
        return newHead.next;
    };
    

})(window.LeetCode = window.LeetCode || {});