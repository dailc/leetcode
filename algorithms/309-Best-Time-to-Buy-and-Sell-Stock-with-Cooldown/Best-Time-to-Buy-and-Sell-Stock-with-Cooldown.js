/* 作者: dailc
 * 时间: 2017-08-05
 * 描述: Best-Time-to-Buy-and-Sell-Stock-with-Cooldown
 * 
 * 来自: https://leetcode.com/problems/best-time-to-buy-and-sell-stock-with-cooldown
 */
(function(exports) {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    var maxProfit = function(prices) {
        if (!prices) {
            return 0;
        }
        
        var MIN_VALUE = -2147483648;
        
        var buy = MIN_VALUE,
            prevBuy = 0,
            sell = 0,
            prevSell = 0;
            
        for (var i = 0, len = prices.length; i < len; i++) {
            var price = prices[i];
            
            prevBuy = buy;
            buy = Math.max(prevSell - price, prevBuy);
            prevSell = sell;
            sell = Math.max(prevBuy + price, prevSell);
        }
        
        return sell;
    };

    exports.maxProfit = maxProfit;

})(window.LeetCode = window.LeetCode || {});