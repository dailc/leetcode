/* 作者: dailc
 * 时间: 2017-09-24
 * 描述: Longest-Absolute-File-Path
 * 
 * 来自: https://leetcode.com/problems/longest-absolute-file-path
 */
(function(exports) {

    /**
     * @param {string} input
     * @return {number}
     */
    var lengthLongestPath = function(input) {
        // 将所有的四个空格替换成 \t，不是\s
        // 并且只能替换和\n连一起的
        input = input.replace(/\n[ ]{4}/g, '\n\t');

        // 替换所有的\n
        var subDirs = input.split(/\n/);
        var paths = [];
        var tmpArr = [];
        var maxLen = 0;
        
        console.log(subDirs);

        var len = subDirs.length;

        for (var i = 0; i < len; i++) {
            // 获取\t的数量
            var matchT = subDirs[i].match(/\t/g);
            var numT = matchT ? matchT.length : 0;

            // 匹配\t和当前的辅助数组
            while (numT < tmpArr.length) {
                // 如果已经不匹配了，到下一个开始
                tmpArr.pop();
            }
            // 将\t去除
            var finalStr = subDirs[i].replace(/\t/g, '');
            var isFile = true;

            // 如果不是文件，需要加上目录标识
            if (!(/\.\w+/.test(finalStr))) {
                finalStr += '/';
                isFile = false;
            }
            tmpArr.push(finalStr);

            paths[i] = tmpArr.join('');

            // 如果是文件后缀，记录当前的最大值
            if (isFile) {
                // 加上parent的长度
                maxLen = Math.max(maxLen, (paths[i].length));
            }         
        }
        
        console.log(paths);
      
        return maxLen;
    };

    exports.lengthLongestPath = lengthLongestPath;

})(window.LeetCode = window.LeetCode || {});