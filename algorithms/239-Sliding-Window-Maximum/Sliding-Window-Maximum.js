/* 作者: dailc
 * 时间: 2017-07-07
 * 描述: Sliding-Window-Maximum
 * 
 * 来自: https://leetcode.com/problems/sliding-window-maximum
 */
(function(exports) {

    /**
     * @param {numsber[]} numss
     * @param {numsber} k
     * @return {numsber[]}
     */
    var maxSlidingWindow = function(nums, size) {
        if (!nums || size <= 0) {
            return [];
        }
        var maxStack = [];
        var len = nums.length;
        //queue中保存的是最大值的角标
        var queue = [];
        for (var i = 0; i < size; i++) {
            while (queue.length && nums[i] >= nums[queue[queue.length - 1]]) {
                queue.pop();
            }
            //存储第一个窗口的最大值
            queue.push(i);
        }
        // 这样可以每一次取一个最大窗口值
        for (var i = size; i < len; i++) {
            maxStack.push(nums[queue[0]]);
            // 如果新的值比以前的窗口值要大，以前的要剔除
            while (queue.length && nums[i] >= nums[queue[queue.length - 1]]) {
                queue.pop();
            }
            // 如果最大的那个值已经过期了，不再当前窗口了，也要剔除
            if (queue.length && queue[0] <= (i - size)) {
                queue.shift();
            }
            queue.push(i);
        }
        maxStack.push(nums[queue[0]]);
        return maxStack;
    };

    exports.maxSlidingWindow = maxSlidingWindow;

})(window.LeetCode = window.LeetCode || {});