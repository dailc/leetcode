/*
 * 一刷时间: 2017-04-07
 * 二刷时间：2017-12-02
 * 来自: https://leetcode.com/problems/permutations
 */
(function(exports) {

    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    function permute(nums) {
        if (!nums || nums.length === 0) {
            return 0;
        }
        // [1, 2, 3]
        return permuteRecur(nums);
    }

    function permuteRecur(words) {
        const result = [];

        if (words.length === 1) {
            // 譬如返回[[2, 3], [3, 2]] [[3]]
            return [words];
        }
        // 传入[2, 3] [3]
        // 返回[[2, 3], [3, 2]] [[3]]
        const preResult = permuteRecur(words.slice(1));
        const len1 = preResult.length;

        for (let i = 0; i < len1; i++) {
            // [2, 3], [3, 2] - [3]
            const preResultI = preResult[i];
            const len2 = preResultI.length;

            for (let j = 0; j <= len2; j++) {
                const tmp = [];

                for (let k = 0; k < j; k++) {
                    tmp.push(preResultI[k]);
                }
                tmp.push(words[0]);
                for (let k = j; k < len2; k++) {
                    tmp.push(preResultI[k]);
                }

                // [[2, 3], [3, 2]]
                result.push(tmp);
            }
        }

        return result;

    }

    exports.permute = permute;

    function swap(nums, i, j) {
        const tmp = nums[i];

        nums[i] = nums[j];
        nums[j] = tmp;
    }

    function permute2(nums) {
        if (!nums || nums.length === 0) {
            return 0;
        }

        const result = [];

        const len = nums.length;
        let i;
        let j;

        nums.sort(function(a, b) {
            return a - b;
        });

        result.push(nums.slice(0));

        while (true) {
            for (i = len - 2; i >= 0; i--) {
                if (nums[i] < nums[i + 1]) {
                    break;
                }
            }

            if (i <= -1) {
                return result;
            }

            for (j = len - 1; j > i; j--) {
                if (nums[j] > nums[i]) {
                    break;
                }
            }

            swap(nums, i, j);

            const mid = Math.floor((i + 1 + len) / 2);

            for (let k = i + 1; k < mid; k++) {
                swap(nums, k, len - (k - i));
            }

            result.push(nums.slice(0));
        }

        return result;
    }

    exports.permute2 = permute2;

})(window.LeetCode = window.LeetCode || {});