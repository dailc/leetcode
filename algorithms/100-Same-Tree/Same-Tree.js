/* 
 * 一刷时间: 2017-05-01
 * 二刷时间：2018-01-25
 * 来自: https://leetcode.com/problems/same-tree
 */
(function(exports) {

    /**
     * Definition for a binary tree node.
     * function TreeNode(val) {
     *     this.val = val;
     *     this.left = this.right = null;
     * }
     */
    /**
     * @param {TreeNode} p
     * @param {TreeNode} q
     * @return {boolean}
     */
    function isSameTree(p, q) {
        if (!p && !q) {
            return true;
        }
        if (!p || !q) {
            return false;
        }
        if (p.val !== q.val) {
            return false;
        }

        return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
    }

    exports.isSameTree = isSameTree;

   function isSameTree2(p, q) {
        if (!p && !q) {
            return true;
        }
        if (!p || !q) {
            return false;
        }
        if (p.val !== q.val) {
            return false;
        }
        const stack = [];
        
        stack.push(p);
        stack.push(q);
        
        while (stack.length) {
            q = stack.pop();
            p = stack.pop();
            
            if (!p && !q) {
                continue;
            }
            if (!p || !q) {
                return false;
            }
            if (p.val !=== q.val) {
                return false;
            }
            stack.push(p.left);
            stack.push(q.left);
            stack.push(p.right);
            stack.push(q.right);
        }
        
        return true;
   }
   
   exports.isSameTree2 = isSameTree2;

})(window.LeetCode = window.LeetCode || {});