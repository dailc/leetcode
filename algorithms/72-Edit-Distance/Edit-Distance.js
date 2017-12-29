/**
 * 一刷时间: 2017-04-17
 * 二刷时间：2017-12-29
 * 来自: https://leetcode.com/problems/edit-distance
 */
(function(exports) {

    /**
     * @param {string} word1
     * @param {string} word2
     * @return {number}
     */
    function minDistance(word1, word2) {
        if (!word1 && !word2) {
            return 0;
        }
        if (!word1) {
            return word2.length;
        }
        if (!word2) {
            return word1.length;
        }
        const len1 = word1.length;
        const len2 = word2.length;
        const distance = [];

        // 初始化[0][j]与[i][0]
        // 注意index的差异，多了1
        for (let i = 0; i <= len1; i++) {
            distance[i] = [];
            distance[i][0] = i;
        }

        for (let j = 0; j <= len2; j++) {
            distance[0][j] = j;
        }

        // 动态规划
        for (let i = 1; i <= len1; i++) {
            for (let j = 1; j <= len2; j++) {
                if (word1.charAt(i - 1) === word2.charAt(j - 1)) {
                    distance[i][j] = distance[i - 1][j - 1];
                } else {
                    distance[i][j] = Math.min(distance[i - 1][j - 1], distance[i][j - 1], distance[i - 1][j]) + 1;
                }
            }
        }

        return distance[len1][len2];
    }

    exports.minDistance = minDistance;

})(window.LeetCode = window.LeetCode || {});