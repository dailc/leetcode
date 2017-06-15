/* 作者: dailc
 * 时间: 2017-06-15
 * 描述: Course-Schedule
 * 
 * 来自: https://leetcode.com/problems/course-schedule
 */
(function(exports) {
    function Graph(val) {
        this.val = val;
        this.prevs = [];
    }
    
    /**
     * @description canFinish
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @return {boolean}
     */
    LeetCode.canFinish = function(numCourses, prerequisites) {
        if(!prerequisites || !prerequisites[0]) {
            return true;
        }
        if(numCourses < 0) {
            return false;
        }
        
        var len = prerequisites.length,
            hash = {},
            count = 0;
        
        var graphs = changeTpGraphs(prerequisites);
        
        for(var item in graphs) {         
            var prevs = graphs[item].prevs;
            var val = graphs[item].val;
            
            if(!hash[val]) {
                count ++;
                hash[val] = true;
            }
            
            for(var i = 0, len = prevs.length; i < len; i ++) {
                var tmp = prevs[i].val;
                if(!hash[tmp]) {
                    count ++;
                    hash[tmp] = true;
                }
                if(hasVal(prevs[i].prevs, val, {})) {
                    return false;
                }
            }
        }
        
        return count <= numCourses;       
    };
    
    // 判断相邻节点中是否有val，会沿着prevs遍历，所以需要hash存储
    function hasVal(prevs, val, hash) {
        for(var i = 0, len = prevs.length; i < len; i ++) {
            var tmp = prevs[i].val;
            if(tmp == val) {
                return true;
            } else {   
                if(!hash[tmp]) {
                    hash[tmp] = true;
                    if(hasVal(prevs[i].prevs, val, hash)) {
                        return true;
                    }
                    hash[tmp] = false;
                }              
            }
        }
        
        return false;
    }
    
    function changeTpGraphs(prerequisites) {
        var len = prerequisites.length,
            graphs = {};
            
        for(var i = 0; i < len; i ++) {
            var arr = prerequisites[i];
            
            var graph = graphs[arr[0]] ? graphs[arr[0]] : new Graph(arr[0]);
            
            var prev = graphs[arr[1]] ? graphs[arr[1]] : new Graph(arr[1]);
            
            graphs[arr[0]] = graph;
            graphs[arr[1]] = prev;
            
            graph.prevs.push(prev);
            
        }
        
        return graphs;
    }
    
    
    LeetCode.canFinish2 = function(numCourses, prerequisites) {
        if(!prerequisites || !prerequisites[0]) {
            return true;
        }
        if(numCourses < 0) {
            return false;
        }
        
        var matrix = [],
            indegree = [],
            len = prerequisites.length;
        
        for(var i = 0; i < numCourses; i ++) {
            matrix[i] = [];
            indegree[i] = 0;
        }
        
        for(var i = 0; i < len; i ++) {
            var item = prerequisites[i];
            var ready = item[0],
                pre = item[1];
            
            // matrix防止重复计算依赖数量
            if(!matrix[pre][ready]) {
                // 有依赖的课程的课程
                indegree[ready] ++;
            }
            
            matrix[pre][ready] = 1;
        }
        
        var count = 0;
        var queue = [];
        
        for(var i = 0, len = indegree.length; i < len; i ++) {
            if(indegree[i] == 0) {
                queue.push(i);
            }
        }

        // 这里进来是没有依赖的课程
        while(queue.length) {
            var course = queue.shift();
            
            count ++;
                   
            for(var i = 0; i < numCourses; i ++) {
                // 开始装载依赖于course的一些课程
                if(matrix[course][i] == 1) {
                    if(-- indegree[i] == 0) {
                        queue.push(i);
                    }
                }
            }
           
        }
        
        return count == numCourses;
    };
    

})(window.LeetCode = window.LeetCode || {});