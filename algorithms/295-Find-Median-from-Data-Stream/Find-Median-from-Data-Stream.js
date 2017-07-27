/* 作者: dailc
 * 时间: 2017-07-27
 * 描述: Find-Median-from-Data-Stream
 * 
 * 来自: https://leetcode.com/problems/find-median-from-data-stream
 */
(function(exports) {

    /**
     * initialize your data structure here.
     */
    var MedianFinder = function() {
        
        this.low = new PriorityQueue();
        // 最小堆的堆钉 是最大值  它是升序的
        this.high = new PriorityQueue(true);
    };

    /** 
     * @param {number} num
     * @return {void}
     */
    MedianFinder.prototype.addNum = function(num) {
        this.low.push(num); // Add to max heap

        this.high.push(this.low.pop()); // balancing step
        
        if (this.low.size() < this.high.size()) {
            // maintain size property
            this.low.push(this.high.pop());
        }
        
    };

    /**
     * @return {number}
     */
    MedianFinder.prototype.findMedian = function() {
        return this.low.size() > this.high.size() ? this.low.top() : (this.low.top() + this.high.top())/2;
    };

    function PriorityQueue(asc) {
        this.asc = asc || false;
        this.queue = [];
    }

    PriorityQueue.prototype.push = function(val) {
        var len = this.queue.length;

        if (len == 0) {
            this.queue.push(val);
        } else {
            if (this.asc) {
                var index = 0;
                for (var i = len; i > 0; i--) {
                    if (val >= this.queue[i-1]) {
                        index = i;
                        break;
                    }
                }
                this.queue.splice(index, 0, val);
            } else {
                var index = len;
                for (var i = 0; i < len; i++) {
                    if (val >= this.queue[i]) {
                        index = i;
                        break;
                    }
                }
                this.queue.splice(index, 0, val);
            }
            
            
        }

    };

    PriorityQueue.prototype.pop = function() {
        return this.queue.pop();
    };

    PriorityQueue.prototype.top = function() {
        return this.queue[this.queue.length - 1];
    };
    
    PriorityQueue.prototype.size = function() {
        return this.queue.length;
    };

    PriorityQueue.prototype.empty = function() {
        return this.queue.length == 0;
    };
    /** 
     * Your MedianFinder object will be instantiated and called as such:
     * var obj = Object.create(MedianFinder).createNew()
     * obj.addNum(num)
     * var param_2 = obj.findMedian()
     */

    exports.MedianFinder = MedianFinder;
    
    var queue = new PriorityQueue(true);
    
   
    queue.push(-2);
    queue.push(-1);
    queue.push(-4);
    queue.push(-5);
    queue.push(-3);
    console.log(queue);

})(window.LeetCode = window.LeetCode || {});