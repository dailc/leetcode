/**
 * 一刷时间: 2017-04-16
 * 二刷时间：2017-12-28
 * 来自: https://leetcode.com/problems/simplify-path/
 */
(function(exports) {

    /**
     * @param {string} path
     * @return {string}
     */
    function simplifyPath(path) {
        if (!path) {
            return '/';
        }
        const pathArr = path.split('/');
        const res = [''];
        const len = pathArr.length;

        for (let i = 0; i < len; i++) {
            const str = pathArr[i];

            if (str === '' || str === '.') {
                continue;
            }
            if (str === '..') {
                if (res.length > 1) {
                    // 至少保留跟路径
                    res.pop();
                }
                continue;
            }
            res.push('/' + str);
        }

        if (res.length === 1) {
            return '/';
        }

        return res.join('');
    }
    exports.simplifyPath = simplifyPath;

})(window.LeetCode = window.LeetCode || {});