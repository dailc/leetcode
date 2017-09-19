/* 作者: dailc
 * 时间: 2017-09-18
 * 描述: Linked-List-Random-Node
 * 
 * 来自: https://leetcode.com/problems/linked-list-random-node
 */
(function(exports) {

    /**
     * Definition for singly-linked list.
     * */
    function ListNode(val) {
        this.val = val;
        this.next = null;
    }

    /**
     * @param head The linked list's head.
            Note that the head is guaranteed to be not null, so it contains at least one node.
     * @param {ListNode} head
     */
    var Solution = function(head) {
        this.head = head;
    };

    /**
     * Returns a random node's value.
     * @return {number}
     */
    Solution.prototype.getRandom = function() {
        var temp = this.head;
        
        var val = temp.val;
        
        for (var i = 1; temp; i++) {

            if (Math.random() * i < 1) {
                val = temp.val;
            }
            
            temp = temp.next;
        }
        
        return val;
    };
    exports.Solution = Solution;
    exports.ListNode = ListNode;

})(window.LeetCode = window.LeetCode || {});