/* 作者: dailc
 * 时间: 2017-06-29
 * 描述: Kth-Smallest-Element-in-a-BST
 * 
 * 来自: https://leetcode.com/problems/kth-smallest-element-in-a-bst
 */
(function(exports) {
    
    function TreeNode(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
    LeetCode.TreeNode = TreeNode;
    
    /**
     * @param {TreeNode} root
     * @param {number} k
     * @return {number}
     */
    LeetCode.kthSmallest = function(root, k) {    
        var res = [k];
        
        return inorderTraversal(root, res);
    };
    
    function inorderTraversal(root, res) {
        if (!root) {
            return -1;
        }
        
        var val = inorderTraversal(root.left, res);
        
        if (!res[0]) {
            // 已经找到了这个节点
            return val;
        }
        
        if (!--res[0]) {
            return root.val;
        }
        
        return inorderTraversal(root.right, res);
    }
    
    LeetCode.kthSmallest2 = function(root, k) {      
        var stack = [],
            tmp = root,
            count = 0;
            
        while (tmp || stack.length) {
            while (tmp) {
                stack.push(tmp);
                tmp = tmp.left;
            }
            tmp = stack.pop();
            
            count ++;
            
            if (count == k) {
                return tmp.val;
            }
            
            tmp = tmp.right;
        }
        
        return -1;
    };

})(window.LeetCode = window.LeetCode || {});