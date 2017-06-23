/* 作者: dailc
 * 时间: 2017-06-22
 * 描述: The-Skyline-Problem
 * 
 * 来自: https://leetcode.com/problems/contains-duplicate
 */
(function(exports) {
    var TYPE_LEFT = 1,
        TYPE_RIGHT = 2;

    function Node(x, y, type) {
        this.x = x;
        this.y = y;
        this.type = type;
    }

    /**
     * @param {number[][]} buildings
     * @return {number[][]}
     */
    LeetCode.getSkyline = function(buildings) {
        var height = [];

        for (var index in buildings) {
            var item = buildings[index];

            height.push(new Node(item[0], item[2], TYPE_LEFT));
            height.push(new Node(item[1], item[2], TYPE_RIGHT));
        }

        height.sort(function(a, b) {
            if (a.x != b.x) {
                return a.x - b.x;
            } else if (a.type == b.type && a.type == TYPE_LEFT) {
                // y从大到小排
                return b.y - a.y;
            } else if (a.type == b.type && a.type == TYPE_RIGHT) {
                return a.y - b.y;
            } else {
                // 左节点在前面
                return a.type == TYPE_RIGHT;
            }
        });
        
        
        var heap = new PriorityQueue(),
            mp = {},
            res = [],
            pre = 0,
            cur = 0;

        heap.push(0);

        for (var index in height) {
            var h = height[index];
            console.log("~~~~~~~~~~~~~~~~~~~~~");
            console.log(heap.queue);
            console.log("!!");
            console.log(JSON.stringify(res));
            console.log(pre);
            if (h.type == TYPE_LEFT) {
                heap.push(h.y);
            } else {
                mp[h.y] = mp[h.y] || 0;
                mp[h.y]++;

                while (!heap.empty() && mp[heap.top()] > 0) {
                    mp[heap.top()]--;
                    heap.pop();
                }
            }

            cur = heap.top();

            if (cur != pre) {
                res.push([h.x, cur]);
                pre = cur;
            }
        }

        return res;
    };

    function PriorityQueue() {
        this.queue = [];
    }

    PriorityQueue.prototype.push = function(val) {
        var len = this.queue.length;
        
        if (len == 0) {
            this.queue.push(val);
        } else {
            var index = len - 1;
            for (var i = len - 1; i >= 0; i--) {
                if (val >= this.queue[i]) {
                    index = i;
                    break;
                }
            }
            this.queue.splice(index + 1, 0, val);
        }

    };

    PriorityQueue.prototype.pop = function() {
        return this.queue.pop();
    };

    PriorityQueue.prototype.top = function() {
        return this.queue[this.queue.length - 1];
    };

    PriorityQueue.prototype.empty = function() {
        return this.queue.length == 0;
    };

})(window.LeetCode = window.LeetCode || {});