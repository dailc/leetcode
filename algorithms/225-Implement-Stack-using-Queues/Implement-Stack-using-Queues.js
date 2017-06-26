/* 作者: dailc
 * 时间: 2017-06-26
 * 描述: Implement-Stack-using-Queues
 * 
 * 来自: https://leetcode.com/problems/basic-calculator
 */
(function(exports) {
    /**
     * Initialize your data structure here.
     */
    var MyStack = function() {
        this.queue1 = new Queue();
        this.queue2 = new Queue();
    };
    
    function dealQueueItems(queue, newQueue) {
        var len = queue.size();
        
        for (var i = 0; i < len; i ++) {
            newQueue.push(queue.pop());
        }
        
        return newQueue;
    }

    /**
     * Push element x onto stack. 
     * @param {number} x
     * @return {void}
     */
    MyStack.prototype.push = function(x) {
        if (this.queue1.isempty()) {
            this.queue1.push(x);
            dealQueueItems(this.queue2, this.queue1);
        } else {
            this.queue2.push(x);
            dealQueueItems(this.queue1, this.queue2);
        }
        
    };

    /**
     * Removes the element on top of the stack and returns that element.
     * @return {number}
     */
    MyStack.prototype.pop = function() {
        if (this.queue1.isempty()) {
            return this.queue2.pop();
        } else {
            return this.queue1.pop();
        }
    };

    /**
     * Get the top element.
     * @return {number}
     */
    MyStack.prototype.top = function() {
        if (this.queue1.isempty()) {
            return this.queue2.peek();
        } else {
            return this.queue1.peek();
        }
    };

    /**
     * Returns whether the stack is empty.
     * @return {boolean}
     */
    MyStack.prototype.empty = function() {
        return this.queue1.isempty() && this.queue2.isempty();
    };
    
    
    function Queue() {
        this.queue = [];
    }
    
    Queue.prototype.push = function(val) {
        // 队头增加
        this.queue.unshift(val);
    };
    
    Queue.prototype.peek = function(val) {
        return this.queue[this.queue.length - 1];
    };
    
    Queue.prototype.pop = function() {
        return this.queue.pop();
    };
    
    Queue.prototype.size = function() {
        return this.queue.length;
    };
    
    Queue.prototype.isempty = function() {
        return this.queue.length == 0;
    };

    LeetCode.MyStack = MyStack;

})(window.LeetCode = window.LeetCode || {});