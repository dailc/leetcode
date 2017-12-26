
/**
 * 一刷时间: 2017-04-15
 * 二刷时间：2017-12-25
 * 来自: https://leetcode.com/problems/text-justification
 */
(function(exports) {

    /**
     * @param {string[]} words
     * @param {number} maxWidth
     * @return {string[]}
     */
    function fullJustify(words, maxWidth) {
        if (words == null || words.length === 0) {
            return [];
        }

        const res = [];
        const len = words.length;
        let count = 0;
        let last = 0;

        for (let i = 0; i < len; i++) {
            // count是上一次计算的单词的长度，words[i].length是当前尝试放的一个单词的长度
            // 假设当前放上了这个单词，那么这一行单词跟单词间的间隔数就是i-last
            // /判断这些总的长度加起来是不是大于L（超行数了）
            if (count + words[i].length + (i - last) > maxWidth) {
                // 因为尝试的words[i]失败了，所以间隔数减1.
                const gap = i - last - 1;
                let spaceNum = 0;
                let extraNum = 0;

                // 此时判断剩余的间隔数是否大于0
                if (gap > 0) {
                    // 是间隔的倍数（为啥要减1，因为尝试当前words[i]后发现比L长了，
                    // 所以当前这个单词不能算作这行，所以间隔就减少一个
                    spaceNum = Math.floor((maxWidth - count) / gap);
                    // 不是倍数的话还要计算
                    extraNum = (maxWidth - count) % gap;
                }

                let strArr = '';

                for (let j = last; j < i; j++) {
                    strArr += words[j];
                    if (j < i - 1) {
                        // words[i-1]的话后面就不用填空格了，所以这里j<i-1
                        // strArr.push((new Array(spaceNum + 1)).join(' '));
                        for (let k = 0; k < spaceNum; k++) {
                            strArr += ' ';
                        }
                        if (extraNum) {
                            strArr += ' ';
                            extraNum--;
                        }

                    }
                }

                // 下面这个for循环作用于一行只有一个单词还没填满一行的情况
                for (let j = strArr.length; j < maxWidth; j++) {
                    strArr += ' ';
                }

                res.push(strArr);
                count = 0;
                // 下一个开始的单词
                last = i;
            }

            count += words[i].length;
        }

        // 处理最后一行
        let strArr = '';

        for (let i = last; i < len; i++) {
            strArr += words[i];
            if (strArr.length < maxWidth) {
                strArr += ' ';
            }
        }

        for (let j = strArr.length; j < maxWidth; j++) {
            strArr += ' ';
        }
        res.push(strArr);

        return res;
    }
    exports.fullJustify = fullJustify;

})(window.LeetCode = window.LeetCode || {});