/* 作者: dailc
 * 时间: 2017-08-10
 * 描述: Remove-Duplicate-Letters
 * 
 * 来自: https://leetcode.com/problems/remove-duplicate-letters
 */
(function(exports) {
    /**
     * @param {string} s
     * @return {string}
     */
    var removeDuplicateLetters = function(s) {
        var freqs = [],
            len = s.length;
        
        // 统计字符频率
        for (var i = 0; i < len; i++) {
            freqs[s.charAt(i)] = (freqs[s.charAt(i)] || 0) + 1;
        }
        
        // 标记存在stack里的字符
        var visited = [],
            queue = [];
            
        for (var i = 0; i < len; i++) {
            var ch = s.charAt(i);
            
            freqs[ch]--;
            
            if (visited[ch]) {
                continue;
            }
            // 当queue最后一个字符比当前的选择大并且频率大于0时，先弹出，并且设置成未访问过（大于0代表后面还会出现，所以不影响结果）
            while (queue.length && queue[queue.length - 1] > ch && freqs[queue[queue.length - 1]] > 0) {
                visited[queue.pop()] = false;
            }
            
            queue.push(ch);
            visited[ch] = true;
        }
        
        var result = '';
        
        for (var i = 0, len = queue.length; i < len; i++) {
            result = result + queue[i];
        }
        
        return result;
    };
    exports.removeDuplicateLetters = removeDuplicateLetters;

})(window.LeetCode = window.LeetCode || {});