/* 作者: dailc
 * 时间: 2017-09-20
 * 描述: Shuffle-an-Array
 * 
 * 来自: https://leetcode.com/problems/shuffle-an-array
 */
(function(exports) {

    function shuffle(arr) {
        var newArr = arr.slice(0);
        
        for (var i = newArr.length - 1; i >= 0; i--) {
            // 随机范围[0,1),从后往前，依次随机交互，可以确保一定随机
            var randomIndex = Math.floor(Math.random() * (i + 1));
            var itemAtIndex = newArr[randomIndex];
            
            newArr[randomIndex] = newArr[i];
            newArr[i] = itemAtIndex;
        }

        return newArr;
    }

    /**
     * @param {number[]} nums
     */
    var Solution = function(nums) {
        this.nums = nums;
        this.originNums = nums;
    };

    /**
     * Resets the array to its original configuration and return it.
     * @return {number[]}
     */
    Solution.prototype.reset = function() {
        this.nums = this.originNums;
        
        return this.nums;
    };

    /**
     * Returns a random shuffling of the array.
     * @return {number[]}
     */
    Solution.prototype.shuffle = function() {
        this.nums = shuffle(this.nums);
        
        return this.nums;
    };

    exports.Solution = Solution;

})(window.LeetCode = window.LeetCode || {});