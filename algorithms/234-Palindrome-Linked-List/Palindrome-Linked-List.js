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

})(window.LeetCode = window.LeetCode || {});