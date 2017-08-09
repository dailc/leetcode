/* 作者: dailc
 * 时间: 2017-08-09
 * 描述: Count of Smaller Numbers After Self
 * 
 * 来自: https://leetcode.com/problems/count-of-smaller-numbers-after-self
 */
(function(exports) {
    function TreeNode(val, smaller) {
        this.val = val;
        this.smaller = smaller;
        this.left = null;
        this.right = null;
    }
    function insert(root, val) {
        if (root.val > val) {
            root.smaller ++;
            
            if (!root.left) {
                return root.left = new TreeNode(val, 0), 0;
            }
            
            return insert(root.left, val);
        } else {
            var curSmaller = root.smaller + (root.val < val ? 1 : 0);
            
            if (!root.right) {
                return root.right = new TreeNode(val, 0), curSmaller;
            }
            
            return insert(root.right, val) + curSmaller;
        }
    }
    /**
     * @param {number[]} nums
     * @return {number}
     */
    var countSmaller = function(nums) {
        var res = [];
        
        var len = nums.length,
            root = new TreeNode(nums[len - 1], 0);
        
        res[len - 1] = 0;
        
        for (var i = len - 2; i >= 0; i--) {
            res[i] = insert(root, nums[i]);
        }
        
        
        return res;
    };
    exports.countSmaller = countSmaller;

})(window.LeetCode = window.LeetCode || {});