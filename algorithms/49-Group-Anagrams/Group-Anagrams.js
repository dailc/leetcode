/**
 * 一刷时间: 2017-04-08
 * 二刷时间：2017-12-05
 * 来自: https://leetcode.com/problems/group-anagrams
 */
(function(exports) {

    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    function groupAnagrams(strs) {
        if (!strs) {
            return [];
        }
        const len = strs.length;
        const hash = {};

        for (let i = 0; i < len; i++) {
            const str = strs[i];
            const strArr = str.split('');

            strArr.sort();

            const hashKey = strArr.join('');

            if (!hash[hashKey]) {
                hash[hashKey] = [];
            }

            hash[hashKey].push(str);
        }

        const res = [];

        Object.keys(hash).forEach(function(hashKey) {
            res.push(hash[hashKey]);
        });

        return res;
    }

    exports.groupAnagrams = groupAnagrams;

})(window.LeetCode = window.LeetCode || {});