/* 作者: dailc
 * 时间: 2017-08-22
 * 描述: Reconstruct-Itinerary
 * 
 * 来自: https://leetcode.com/problems/reconstruct-itinerary
 */
(function(exports) {
    var dfs = function(res, mp, target) {
        while (mp[target] && mp[target].length) {
            mp[target].sort();
            var nextPlace = mp[target].shift();
            dfs(res, mp, nextPlace);
        }
        
        res.unshift(target);
    };
    
    var findItinerary = function(tickets) {
        var res = [],
            mp = {},
            len = tickets.length;
        
        for (var i = 0; i < len; i++) {
            var ticket = tickets[i];
            
            mp[ticket[0]] = mp[ticket[0]] || [];
            mp[ticket[0]].push(ticket[1]);
        }
        
        dfs(res, mp, "JFK")
        
        return res;
    };
    exports.findItinerary = findItinerary;

})(window.LeetCode = window.LeetCode || {});