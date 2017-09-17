/* 作者: dailc
 * 时间: 2017-09-17
 * 描述: Insert-Delete-GetRandom-O(1)-Duplicates-allowed
 * 
 * 来自: https://leetcode.com/problems/insert-delete-getrandom-o1-duplicates-allowed
 */
(function(exports) {

    /**
     * Initialize your data structure here.
     */
    let RandomizedCollection = function() {
        this.mp = {};
        this.data = [];
    };

    /**
     * Inserts a value to the set. Returns true if the set did not already contain the specified element. 
     * @param {number} val
     * @return {boolean}
     */
    RandomizedCollection.prototype.insert = function(val) {
        const flag = (!this.mp[val] || !this.mp[val].length) ? true : false;
        
        this.mp[val] = this.mp[val] || [];
        this.data.push(val);
        this.mp[val].push(this.data.length - 1);

        return flag;    
    };

    /**
     * Removes a value from the set. Returns true if the set contained the specified element. 
     * @param {number} val
     * @return {boolean}
     */
    RandomizedCollection.prototype.remove = function(val) {
        if (!this.mp[val] || !this.mp[val].length) {
            return false;
        } else {
            const index = this.mp[val].pop();
            // 找到当前栈顶元素          
            
            if (index < this.data.length - 1) {
                // 若删除的不是链表最后的元素
                // 交换末尾元素和被删除元素  
                // 栈顶出栈
                const oldPop = this.data[this.data.length - 1];
                // 将当前位置变为栈顶元素
                this.data[index] = oldPop;             
                
                // oldPop相应的index
                const oldIndex = this.mp[oldPop].indexOf(this.data.length - 1);
                this.mp[oldPop][oldIndex] = index;
                
            }
            
            this.data.pop();
            
            return true;
        }
    };

    /**
     * Get a random element from the set.
     * @return {number}
     */
    RandomizedCollection.prototype.getRandom = function() {
        return this.data[Math.floor(Math.random() * this.data.length)];
    };

    exports.RandomizedCollection = RandomizedCollection;

})(window.LeetCode = window.LeetCode || {});