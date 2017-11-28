/*
 * 一刷时间: 2017-04-05
 * 二刷时间：2017-11-28
 * 来自: https://leetcode.com/problems/trapping-rain-water
 */
(function(exports) {

    /**
     * 找至高点，从两侧向至高点靠拢
     * @param {number[]} height
     * @return {number}
     */
    function trap(height) {
        if (!height) {
            return 0;
        }

        const len = height.length;
        let maxHeight = height[0];
        let maxIndex = 0;

        for (let i = 1; i < len; i++) {
            if (height[i] > maxHeight) {
                maxHeight = height[i];
                maxIndex = i;
            }
        }

        let area = 0;
        let lastWall = height[0];

        // 从左侧到至高
        for (let i = 1; i < maxIndex; i++) {
            if (height[i] < lastWall) {
                area += lastWall - height[i];
            } else {
                lastWall = height[i];
            }
        }

        lastWall = height[len - 1];
        // 从右侧到至高
        for (let j = len - 2; j > maxIndex; j--) {
            if (height[j] < lastWall) {
                area += lastWall - height[j];
            } else {
                lastWall = height[j];
            }
        }

        return area;
    }

    exports.trap = trap;

})(window.LeetCode = window.LeetCode || {});