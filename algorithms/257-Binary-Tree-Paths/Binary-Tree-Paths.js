/* 作者: dailc
 * 时间: 2017-07-11
 * 描述: Binary-Tree-Paths
 * 
 * 来自: https://leetcode.com/problems/binary-tree-paths
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
     * @return {string[]}
     */
    var binaryTreePaths = function(root) {
        var res = [];
        
        binaryTreePathsRecurse(res, [], root);
        
        return res;
    };
    
    function binaryTreePathsRecurse(res, tmp, root) {
        if (!root) {
            return ;
        }
        
        tmp.push(root.val);
        
        var isFound = false;
        
        if (root.left) {
            isFound = true;
            binaryTreePathsRecurse(res, tmp, root.left);
        } 
        
        if (root.right) {
            isFound = true;
            binaryTreePathsRecurse(res, tmp, root.right);
        } 
        
        if (!isFound) {
            res.push(tmp.slice(0).join('->'));
        }     
        
        tmp.pop();
        
    }
    


    exports.binaryTreePaths = binaryTreePaths;

})(window.LeetCode = window.LeetCode || {});