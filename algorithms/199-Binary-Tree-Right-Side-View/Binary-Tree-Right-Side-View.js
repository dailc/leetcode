/* 作者: dailc
 * 时间: 2017-06-11
 * 描述: Binary-Tree-Right-Side-View
 * 
 * 来自: https://leetcode.com/problems/binary-tree-right-side-view
 */
(function(exports) {
    function TreeNode(val) {
        this.val = val;
        this.left = this.right = null;
    }
    LeetCode.TreeNode = TreeNode;
    /**
     * @description rightSideView
     * @param {TreeNode} root
     * @return {number[]}
     */
    LeetCode.rightSideView = function(root) {
        if(!root) {
            return [];
        }
        var res = [],
            nextLevel = 0,
            toBePrinted = 1,
            stack = [];

        stack.push(root);
        while(stack.length) {
            var tmp = stack.shift();
            toBePrinted --;

            if(tmp.left) {
                nextLevel++;
                stack.push(tmp.left);
            }
            if(tmp.right) {
                nextLevel++;
                stack.push(tmp.right);
            }
            if(toBePrinted == 0) {
                // 添加最后一个元素
                res.push(tmp.val);
                toBePrinted = nextLevel;
                nextLevel = 0;
            }
        }

        return res;
    };

})(window.LeetCode = window.LeetCode || {});