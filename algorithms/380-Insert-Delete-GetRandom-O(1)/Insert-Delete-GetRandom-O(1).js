/* 作者: dailc
 * 时间: 2017-09-16
 * 描述: Insert-Delete-GetRandom-O(1)
 * 
 * 来自: https://leetcode.com/problems/insert-delete-getrandom-o1
 */
(function(exports) {

    /**
     * Initialize your data structure here.
     */
    let RandomizedSet = function() {
        this.mp = {};
        this.data = [];
    };

    /**
     * Inserts a value to the set. Returns true if the set did not already contain the specified element. 
     * @param {number} val
     * @return {boolean}
     */
    RandomizedSet.prototype.insert = function(val) {
        if (this.mp[val] !== undefined) {
            return false;
        } else {
            this.data.push(val);
            this.mp[val] = this.data.length - 1;
            
            return true;
        }
    };

    /**
     * Removes a value from the set. Returns true if the set contained the specified element. 
     * @param {number} val
     * @return {boolean}
     */
    RandomizedSet.prototype.remove = function(val) {
        if (this.mp[val] === undefined) {
            return false;
        } else {
            const index = this.mp[val];
            // 找到当前栈顶元素
            const oldPop = this.data[this.data.length - 1];
            
            // 将当前位置变为栈顶元素
            this.data[index] = oldPop;
            this.mp[oldPop] = index; 
            
            // 栈顶出栈
            this.data.pop();
            this.mp[val] = undefined;
            
            return true;
        }
    };

    /**
     * Get a random element from the set.
     * @return {number}
     */
    RandomizedSet.prototype.getRandom = function() {
        return this.data[Math.floor(Math.random() * this.data.length)];
    };

    exports.RandomizedSet = RandomizedSet;

})(window.LeetCode = window.LeetCode || {});