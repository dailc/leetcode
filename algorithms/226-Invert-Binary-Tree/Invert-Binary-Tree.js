/* 作者: dailc
 * 时间: 2017-06-27
 * 描述: Invert-Binary-Tree
 * 
 * 来自: https://leetcode.com/problems/basic-calculator
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
     * @return {TreeNode}
     */
    LeetCode.invertTree = function(root) {
        return invertTreeRecurse(root);
    };
    
    function invertTreeRecurse(root) {
        if (!root) {
            return root;
        }
        
        var tmp = root.left;
        
        root.left = root.right;
        
        root.right = tmp;
        
        invertTreeRecurse(root.left);
        invertTreeRecurse(root.right);
        
        return root;
    }
})(window.LeetCode = window.LeetCode || {});