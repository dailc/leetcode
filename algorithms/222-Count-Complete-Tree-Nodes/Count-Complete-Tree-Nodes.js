/* 作者: dailc
 * 时间: 2017-06-24
 * 描述: Count-Complete-Tree-Nodes
 * 
 * 来自: https://leetcode.com/problems/count-complete-tree-nodes
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
     * @return {number}
     */
    LeetCode.countNodes = function(root) {        
        return countNodesRecurse(root);        
    };
    
    function countNodesRecurse(root) {
        if (!root) {
            return 0;
        }
        // +1是为了方便计算总节点数量
        var l = getLeft(root) + 1;
        var r = getRight(root) + 1;
        
        if (l == r) {
            return (2 << (l - 1)) - 1;
        } else {
            // +1 是为了补全根节点自己
            return countNodesRecurse(root.left) + countNodesRecurse(root.right) + 1;
        }
    }
    
    function getLeft(root) {
        var count = 0;
        
        while (root.left) {
            count ++;
            root = root.left;
        }
        
        return count;
    }
    
    function getRight(root) {
        var count = 0;
        
        while (root.right) {
            count ++;
            root = root.right;
        }
        
        return count;
    }

})(window.LeetCode = window.LeetCode || {});