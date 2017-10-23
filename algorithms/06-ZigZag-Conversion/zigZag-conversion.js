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

    /**
     * @description 
     * 先用最直观的方法解出来
     * @param {String} str
     * @param {Number} numRows
     * @return {String} 
     */
    exports.convert2 = function(str, numRows) {
        if (!numRows) {
            return str
        }
        //存放临时数组的array
        var tmpArray = [];
        for (var i = 0; i < numRows; i++) {
            tmpArray[i] = [];
        }
        //为1代表row ++,否则row--
        var delta = 1,
            row = 0;
        for (var i = 0, len = str.length; i < len; i++) {
            tmpArray[row].push(str.substr(i, 1));
            row += delta;
            if (row > numRows - 1) {
                row = numRows - 2;
                delta = -1;
            } else if (row < 0) {
                row = 1;
                delta = 1;
            }

            if (row < 0) {
                row = 0;
            } else if (row > numRows - 1) {
                row = numRows - 1;
            }
        }
        var result = '';
        for (var i = 0; i < numRows; i++) {
            result += tmpArray[i].join('');
        }

        return result;
    };

})(window.LeetCode = window.LeetCode || {});