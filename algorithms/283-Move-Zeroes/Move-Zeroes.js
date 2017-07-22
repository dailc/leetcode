/* 作者: dailc
 * 时间: 2017-07-22
 * 描述: Move-Zeroes
 * 
 * 来自: https://leetcode.com/problems/move-zeroes
 */
(function(exports) {

    /**
     * @param {number[]} nums
     * @return {void} Do not return anything, modify nums in-place instead.
     */
    var moveZeroes = function(nums) {
        if (!nums) {
            return ;
        }
        // 最小栈，最小值在最上面
        var posZero = new MinStack(),
            len = nums.length;
        
        for (var i = 0; i < len; i++) {
            if (nums[i] === 0) {
                posZero.push(i);
            }
        }
        
        if (!posZero.size()) {
            // 没有0
            return ;
        }
        
        for (var i = 0; i < len; i++) {
            if (nums[i] !== 0 && i > posZero.top()) {
                // 和现有的0位置交换
                nums[posZero.pop()] = nums[i];
                nums[i] = 0;
                posZero.push(i);
                
            }
        }     
        
    };
    
    function MinStack() {
        this.stack = [];
    }
    
    MinStack.prototype = {
        pop: function() {
            return this.stack.pop();
        },
        top: function() {
            return this.stack[this.stack.length - 1];
        },
        size: function() {
            return this.stack.length;
        },
        push: function(val) {
            var len = this.stack.length,
                stack = this.stack;
            
            if (!len || val <= this.top()) {
                stack.push(val);
            } else {
                for (var i = len - 1; i >= 0; i--) {
                    if (val <= stack[i]) {
                        // 插入
                        stack.splice(i + 1, 0, val);
                        return ;
                    }
                }
                // 如果是最大值
                stack.unshift(val);
            }
        }
    };
   

    exports.moveZeroes = moveZeroes;

})(window.LeetCode = window.LeetCode || {});