/*
 * 一刷时间: 2017-03-30
 * 二刷时间：2017-11-16
 * 来自: https://leetcode.com/problems/substring-with-concatenation-of-all-words
 */
(function(exports) {

    /**
     * @param {string} s
     * @param {string[]} words
     * @return {number[]}
     */
    function findSubstring(s, words) {
        if (!s || !words) {
            return [];
        }

        const wordsCount = words.length;
        const lenS = s.length;
        const width = words[0].length;
        const exists = [];

        for (let i = 0; i < wordsCount; i++) {
            if (!exists[words[i]]) {
                exists[words[i]] = 1;
            } else {
                exists[words[i]]++;
            }
        }

        const indices = [];

        for (let i = 0; i < width; i++) {
            let count = 0;
            let index = i;
            let tmpHash = {};

            for (let j = i; j <= lenS - width; j += width) {
                const substr = s.substr(j, width);

                if (!exists[substr]) {
                    count = 0;
                    tmpHash = {};
                    index = j + width;
                } else {
                    if (!tmpHash[substr]) {
                        tmpHash[substr] = 1;
                    } else {
                        tmpHash[substr]++;
                    }
                }

                if (tmpHash[substr] <= exists[substr]) {
                    count++;
                } else {
                    // 不满足次数要求
                    while (tmpHash[substr] > exists[substr]) {
                        const tmp = s.substr(index, width);

                        tmpHash[tmp] -= 1;
                        if (tmpHash[tmp] < exists[tmp]) {
                            // 注意，可能减完后仍然等于的，那这样虽然窗口滑动，但是数量没变
                            count--;
                        }
                        index += width;
                    }
                }

                if (count === wordsCount) {
                    indices.push(index);

                    const tmp = s.substr(index, width);

                    tmpHash[tmp] -= 1;
                    count--;
                    index += width;
                }
            }
        }

        return indices;
    };

    exports.findSubstring = findSubstring;

})(window.LeetCode = window.LeetCode || {});