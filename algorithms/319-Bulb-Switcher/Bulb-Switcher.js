/* 作者: dailc
 * 时间: 2017-08-12
 * 描述: Bulb-Switcher
 * 
 * 来自: https://leetcode.com/problems/bulb-switcher
 */
(function(exports) {
    /**
     * @param {number} n
     * @return {number}
     */
    var bulbSwitch = function(n) {
        return ~~(Math.sqrt(n));
    };
    exports.bulbSwitch = bulbSwitch;

})(window.LeetCode = window.LeetCode || {});