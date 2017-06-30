/* 作者: dailc
 * 时间: 2017-06-30
 * 描述: Power-of-Two
 * 
 * 来自: https://leetcode.com/problems/power-of-two
 */
(function(exports) {
    
    
    /**
     * Initialize your data structure here.
     */
    var MyQueue = function() {
        this.stack1 = new Stack();
        this.stack2 = new Stack();
    };

    /**
     * Push element x to the back of queue. 
     * @param {number} x
     * @return {void}
     */
    MyQueue.prototype.push = function(x) {
        this.stack1.push(x);
    };

    /**
     * Removes the element from in front of queue and returns that element.
     * @return {number}
     */
    MyQueue.prototype.pop = function() {
        if (!this.stack2.isempty()) {
            return this.stack2.pop();
        } else {
            while (!this.stack1.isempty()) {
                this.stack2.push(this.stack1.pop());
            }      
            
            return this.stack2.pop();
        }
    };

    /**
     * Get the front element.
     * @return {number}
     */
    MyQueue.prototype.peek = function() {
        if (!this.stack2.isempty()) {
            return this.stack2.peek();
        } else {
            while (!this.stack1.isempty()) {
                this.stack2.push(this.stack1.pop());
            }      
            
            return this.stack2.peek();    
        }
    };

    /**
     * Returns whether the queue is empty.
     * @return {boolean}
     */
    MyQueue.prototype.empty = function() {
        return this.stack1.isempty() && this.stack2.isempty();
    };
    
    
    function Stack() {
        this.stack = [];
    }
    
    Stack.prototype.push = function(x) {
        this.stack.push(x);
    };
    
    Stack.prototype.pop = function() {
        return this.stack.pop();
    };
    
    Stack.prototype.peek = function() {
        return this.stack[this.stack.length - 1];
    };
    
    Stack.prototype.size = function() {
        return this.stack.length;
    };
    
    Stack.prototype.isempty = function() {
        return this.stack.length == 0;
    };

    LeetCode.MyQueue = MyQueue;

})(window.LeetCode = window.LeetCode || {});