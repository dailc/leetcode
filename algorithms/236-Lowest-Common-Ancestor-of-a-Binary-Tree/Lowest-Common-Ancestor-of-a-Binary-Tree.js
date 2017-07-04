/* 作者: dailc
 * 时间: 2017-07-04
 * 描述: Lowest-Common-Ancestor-of-a-Binary-Tree
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
        if (!root || !p || !q) {
            return null;
        }
        
        var pathp = [],
            pathq = [];
            
        pathp.push(root);
        pathq.push(root);
        
        getPath(root, p, pathp);
        getPath(root, q, pathq);
        
        var lca,
            lenp = pathp.length,
            lenq = pathq.length;
        
        for (var i = 0; i < lenp && i < lenq; i ++) {
            if (pathp[i] == pathq[i]) {
                lca = pathp[i];
            } else {
                break;
            }
        }
        
        return lca;
    };
    
    function getPath(root, node, path) {
        if (root == node) {
           return true;
        }
        
        if (root.left) {
            path.push(root.left);
            
            if (getPath(root.left, node, path)) {
                return true;
            }
            
            path.pop();
        }
        
        if (root.right) {
            path.push(root.right);
            
            if (getPath(root.right, node, path)) {
                return true;
            }
            
            path.pop();
        }
    }
    
    

    exports.lowestCommonAncestor = lowestCommonAncestor;


})(window.LeetCode = window.LeetCode || {});