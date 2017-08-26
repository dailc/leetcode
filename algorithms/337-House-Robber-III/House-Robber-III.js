/* 作者: dailc
 * 时间: 2017-08-26
 * 描述: House-Robber-III
 * 
 * 来自: https://leetcode.com/problems/house-robber-iii
 */
(function(exports) {
    function TreeNode(val) {
        this.val = val;
        this.left = this.right = null;
    }
    
    var Money = function() {
        this.notUse = 0;
        this.use = 0;
    };
    
    var getMoney = function(root) {
        if (!root) {
            return new Money();
        }
        
        var leftMoney = getMoney(root.left);
        var rightMoney = getMoney(root.right);
        var rootMoney = new Money();
        
        rootMoney.use = root.val + leftMoney.notUse + rightMoney.notUse;
        rootMoney.notUse = Math.max(leftMoney.notUse, leftMoney.use) + Math.max(rightMoney.notUse, rightMoney.use);
        
        return rootMoney;
    };

    var rob = function(root) {
        var rootMoney = getMoney(root);
        
        return Math.max(rootMoney.notUse, rootMoney.use);
    };

    exports.rob = rob;

})(window.LeetCode = window.LeetCode || {});