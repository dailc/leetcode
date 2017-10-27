/* 
 * 一刷时间: 2017-03-15
 * 二刷时间：2017-10-27
 * 来自: https://leetcode.com/problems/two-sum/description/
 */
(function(exports) {
    /**
     * @param {number[]} height
     * @return {number}
     */
    function maxArea(height) {
        if (!height || height.length < 2) {
            return -1;
        }
        
        const len = height.length;
        let maxArea = 0;
        let left = 0;
        let right = len - 1;
        
        while (left < right) {
            const curMaxArea = (right - left) * Math.min(height[left], height[right]);
            
            maxArea = Math.max(maxArea, curMaxArea);
            
            // 去掉当前较小的边
            if (height[left] < height[right]) {
                left++;
            } else {
                right--;
            }
        }
        
        return maxArea;
    }

    exports.maxArea = maxArea;

})(window.LeetCode = window.LeetCode || {});