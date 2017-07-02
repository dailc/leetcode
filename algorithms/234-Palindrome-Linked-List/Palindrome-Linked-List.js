/* 作者: dailc
 * 时间: 2017-07-02
 * 描述: Palindrome-Linked-List
 * 
 * 来自: https://leetcode.com/problems/number-of-digit-one
 */
(function(exports) {
    function ListNode(val) {
        this.val = val;
        this.next = null;
    }
    
    exports.ListNode = ListNode;

    /**
     * @param {ListNode} head
     * @return {boolean}
     */
    var isPalindrome = function(head) {
        if (!head) {
            return true;
        }
        
        var str = '',
            str2 = '';
        
        while (head) {
            str2 = head.val + str2;
            str = str + head.val;
            head = head.next;
        }
        
        return str == str2;
    };

    exports.isPalindrome = isPalindrome;
    
    var isPalindrome2 = function(head) {
        if (!head || !head.next) {
            return true;
        }
        // 快慢指针寻找中心
        var slow = head,
            fast = head;
            
        while (fast && fast.next) {
            slow = slow.next;
            fast = fast.next.next;
        }
        
        if (fast) {
            // 奇数的链表数
            slow.next = reverseList(slow.next);
            slow = slow.next;
        } else {
            // 偶数
            slow = reverseList(slow);
        }
        
        while (slow) {
            if (head.val != slow.val) {
                return false;
            }
            slow = slow.next;
            head = head.next;
        }
        
        return true;
    };
    
    function reverseList(head) {
        var prev = null;
        
        while (head) {
            var next = head.next;
            
            head.next = prev;
            
            prev = head;
            head = next;
        }
        
        return prev;
    }
    
    exports.isPalindrome2 = isPalindrome2;

})(window.LeetCode = window.LeetCode || {});