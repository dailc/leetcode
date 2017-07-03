/* 作者: dailc
 * 时间: 2017-07-03
 * 描述: Lowest-Common-Ancestor-of-a-Binary-Search-Tree
 * 
 * 来自: https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree
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
     * @param {TreeNode} p
     * @param {TreeNode} q
     * @return {TreeNode}
     */
    var lowestCommonAncestor = function(root, p, q) {
        if (!root) {
            return root;
        }
        if (Math.max(p.val, q.val) < root.val) {
            return lowestCommonAncestor(root.left, p, q);
        } else if (Math.min(p.val, q.val) > root.val) {
            return lowestCommonAncestor(root.right, p, q);
        } else {
            return root;
        }
        
    };
    
    

    exports.lowestCommonAncestor = lowestCommonAncestor;


})(window.LeetCode = window.LeetCode || {});