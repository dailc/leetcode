/* 作者: dailc
 * 时间: 2017-07-16
 * 描述: Integer-to-English-Words
 * 
 * 来自: https://leetcode.com/problems/integer-to-english-words
 */
(function(exports) {

    /**
     * @param {number} num
     * @return {string}
     */
    var numberToWords = function(num) {
        if (!num || num < 0) {
            return 'Zero';
        }
        // 先把最低的 3位转换出来
        var res = convertHundred(num % 1000);
        
        var unit = ["Thousand", "Million", "Billion"];
        
        for (var i = 0, len = unit.length; i < len; i ++) {
            num = ~~(num / 1000);
            
            res = num % 1000 ? (convertHundred(num % 1000) + ' ' + unit[i] + ' ' + res) : res;
        }
        // 替换空格
        res = res.replace(/\s+$/, '');
        
        return res;
    };
    
    function convertHundred(num) {
        var unit1 = ["", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", 
            "Ten", "Eleven", "Twelve", "Thirteen", "Fourteen", "Fifteen", "Sixteen", "Seventeen", 
            "Eighteen", "Nineteen"];
        var unit2 = ["", "", "Twenty", "Thirty", "Forty", "Fifty", "Sixty", "Seventy", "Eighty", "Ninety"];
        
        var res = '',
            divisor = ~~(num / 100),
            remainderT = num % 100,
            remainderH = num % 10;
            
        res = remainderT < 20 ? unit1[remainderT] : (unit2[~~(remainderT / 10)] + (remainderH ? " " + unit1[remainderH] : ''));
        
        if (divisor > 0) {
            res = unit1[divisor] + ' Hundred' + (res ? ' ' + res : '');
        }
        
        return res;
    }

    exports.numberToWords = numberToWords;

})(window.LeetCode = window.LeetCode || {});