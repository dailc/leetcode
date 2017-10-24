/* 
 * 一刷时间: 2016-12-12
 * 二刷时间：2017-10-23
 * 来自: https://leetcode.com/problems/zigzag-conversion/
 */
(function(exports) {
    /**
     * @param {string} s
     * @param {number} numRows
     * @return {string}
     */
    function convert(s, numRows) {
        const len = s.length;
        
        if (len === 0 || numRows < 2) {
            return s;
        }
        
        // 循环周期
        const lag = 2 * numRows - 2;
        let res = '';
        
        for　(let i = 0; i < numRows; i += 1) {
            for　(let j = i; j < len; j += lag) {
                res += s.charAt(j);
                
                // 非首行和末行时还要加一个
                if (i > 0 && i < numRows - 1) {
                    const tmp = j + lag - 2 * i;
                    
                    if (tmp < len) {
                        res += s.charAt(tmp);
                    }
                }
            }
        }
        
        return res;
    }

    exports.convert = convert;

})(window.LeetCode = window.LeetCode || {});