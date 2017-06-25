/* 作者: dailc
 * 时间: 2017-06-25
 * 描述: Rectangle-Area
 * 
 * 来自: https://leetcode.com/problems/rectangle-area
 */
(function(exports) {

    /**
     * @param {number} A
     * @param {number} B
     * @param {number} C
     * @param {number} D
     * @param {number} E
     * @param {number} F
     * @param {number} G
     * @param {number} H
     * @return {number}
     */
    LeetCode.computeArea = function(A, B, C, D, E, F, G, H) {
        var res = (D - B) * (C - A) + (H - F) * (G - E);

        // 相交矩形
        var A1 = Math.max(A, E),
            B1 = Math.max(B, F),
            C1 = Math.min(C, G),
            D1 = Math.min(D, H);
        
        if (D1 <= B1 || C1 <= A1) {
            return res;
        } else {
            return res - (D1 - B1)*(C1 - A1);
        }
    };

})(window.LeetCode = window.LeetCode || {});