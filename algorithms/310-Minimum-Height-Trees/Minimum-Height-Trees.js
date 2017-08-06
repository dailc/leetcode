/* 作者: dailc
 * 时间: 2017-08-06
 * 描述: Minimum-Height-Trees
 * 
 * 来自: https://leetcode.com/problems/minimum-height-trees
 */
(function(exports) {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @return {number[]}
     */
    var findMinHeightTrees = function(n, edges) {
        if (n == 1) {
            return [0]
        }
        
        var res = [],
            adj = [],
            queue = [],
            len = edges.length;
            
        for (var i = 0; i < len; i++) {
            var edge = edges[i];
            
            adj[edge[0]] = adj[edge[0]] || [];
            adj[edge[0]].push(edge[1]);
            adj[edge[1]] = adj[edge[1]] || [];
            adj[edge[1]].push(edge[0]);
        }
        
        for (var i = 0; i < n; i++) {
            if (adj[i] && adj[i].length == 1) {
                queue.unshift(i);
            }
        }
        
        while (n > 2) {
            var size = queue.length;
            
            n -= size;
            
            for (var i = 0; i < size; i++) {
                var tmp = queue.pop();
                for (var j = 0, len = adj[tmp].length; j < len; j++) {
                    var a = adj[tmp][j];
                    var index = adj[a].indexOf(tmp);
                    
                    if (index != -1) {
                        adj[a].splice(index, 1);
                    }
                    
                    if (adj[a].length == 1) {
                        queue.unshift(a);
                    }
                }
            }
        }
        
        while (queue.length) {
            res.push(queue.pop());
        }
        
        return res;
    };
    exports.findMinHeightTrees = findMinHeightTrees;

})(window.LeetCode = window.LeetCode || {});