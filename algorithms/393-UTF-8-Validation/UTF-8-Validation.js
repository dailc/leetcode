/* 作者: dailc
 * 时间: 2017-09-28
 * 描述: validUtf8
 * 
 * 来自: https://leetcode.com/problems/utf-8-validation
 */
(function(exports) {

    /**
     * 超时，可优化
     * @param {number[]} data
     * @return {boolean}
     */
    var validUtf8 = function(data) {
        // 依次替换掉
        var regexs = [
            // 0xxxxxxx
            /0\d{7}(?=(\d{8})*$)/g,
            // 110xxxxx 10xxxxxx
            /110\d{5}10\d{6}(?=(\d{8})*$)/g,
            // 1110xxxx 10xxxxxx 10xxxxxx
            /1110\d{4}(10\d{6}){2}(?=(\d{8})*$)/g,
            // 11110xxx 10xxxxxx 10xxxxxx 10xxxxxx
            /11110\d{3}(10\d{6}){3}(?=(\d{8})*$)/g,
        ];

        // 所有数据换取成二进制
        data = data.map(function(item) {
            return (Array(8).join('0') + item.toString(2)).slice(-8);
        });
        
        console.log(data);
        
        var binary = data.join('');
        
        console.log(binary);
        
        binary = binary.replace(regexs[3], '')
            .replace(regexs[2], '')
            .replace(regexs[1], '')
            .replace(regexs[0], '');
        
        console.log(binary);
        return binary === '';
    };
    
    var validUtf82 = function(data) {
        var count = 0;
        
        for (var i = 0, len = data.length; i < len; i++) {
            var d = data[i];
            
            if (count === 0) {
                if (d >> 5 === 0B110) {
                    count = 1;
                } else if (d >> 4 === 0B1110) {
                    count = 2;
                } else if (d >> 3 === 0B11110) {
                    count = 3;
                } else if (d >> 7) {
                    return false;
                }
            } else {
                if (d >> 6 !== 0B10) {
                    return false;
                }
                count--;
            }
        }
        
        return count === 0;
    };

    exports.validUtf8 = validUtf8;
    exports.validUtf82 = validUtf82;

})(window.LeetCode = window.LeetCode || {});