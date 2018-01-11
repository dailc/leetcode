/**
 * 一刷时间: 2017-04-22
 * 二刷时间：2018-01-10
 * 来自: https://leetcode.com/problems/maximal-rectangle
 */
(function(exports) {

    /**
     * @description maximalRectangle
     * @param {character[][]} matrix
     * @return {number}
     */
    exports.maximalRectangle2 = function(matrix) {
        if (!matrix || !matrix[0]) {
            return 0;
        }
        //高度数组，二维数组，每行分别进行计算
        var height = [];
        var maxArea = 0,
            rows = matrix.length,
            cols = matrix[0].length;

        for (var i = 0; i < rows; i++) {
            height[i] = [];
            for (var j = 0; j < cols; j++) {
                if (matrix[i][j] == '0') {
                    height[i][j] = 0;
                } else {
                    height[i][j] = i == 0 ? 1 : height[i - 1][j] + 1;
                }
            }
        }
        for (var i = 0; i < rows; i++) {
            var area = largestRectangleArea(height[i]);
            maxArea = Math.max(maxArea, area);
        }

        return maxArea;
    };

    exports.maximalRectangle = maximalRectangle;

    /**
     * @param {character[][]} matrix
     * @return {number}
     */
    function maximalRectangle(matrix) {
        if (!matrix || !matrix[0]) {
            return 0;
        }
        const rows = matrix.length;
        const cols = matrix[0].length;
        // 记录每一行的高度
        const heights = [];
        let maxarea = 0;

        for (let i = 0; i < rows; i++) {
            heights[i] = [];
            for (let j = 0; j < cols; j++) {
                if (+matrix[i][j] === 0) {
                    heights[i][j] = 0;
                } else {
                    heights[i][j] = (i === 0) ? 1 : (heights[i - 1][j] + 1);
                }
            }
        }
        for (let i = 0; i < rows; i++) {
            const currArea = largestRectangleArea(heights[i]);

            maxarea = Math.max(maxarea, currArea);
        }

        return maxarea;
    }

    /**
     * @param {number[]} heights
     * @return {number}
     */
    function largestRectangleArea(heights) {
        if (!heights) {
            return 0;
        }
        // push一个-1用来自动合并
        heights.push(-1);

        const stack = [];
        const len = heights.length;
        let sum = 0;

        for (let i = 0; i < len; i++) {
            if (stack.length === 0 || heights[i] >= heights[stack[stack.length - 1]]) {
                // 只要后来的比前面大，就入栈，因为此时直方图面积肯定是递增的
                stack.push(i);
            } else {
                // 开始计算栈内的最大面积
                // 譬如 先算  6 再算  5*2 再算  1*3
                const stackTop = stack.pop();
                // 如果以前没有更小的，则连当前i计算的就是当前最大面积，后面部分-1是因为已经pop出一个了，剩下的栈顶元素会是更前面一个
                const tmpWidth = stack.length === 0 ? i : (i - stack[stack.length - 1] - 1);

                sum = Math.max(sum, heights[stackTop] * tmpWidth);
                i--;
            }
        }

        return sum;
    }

})(window.LeetCode = window.LeetCode || {});