/* 作者: dailc
 * 时间: 2017-06-18
 * 描述: Word-Search-II
 * 
 * 来自: https://leetcode.com/problems/word-search-ii
 */
(function(exports) {
    function TrieNode(val) {
        this.children = {};
        this.isWord = false;
        this.val = val;
    }

    /**
     * Initialize your data structure here.
     */
    var Trie = function() {
        this.root = new TrieNode('');

    };

    /**
     * Inserts a word into the trie. 
     * @param {string} word
     * @return {void}
     */
    Trie.prototype.insert = function(word) {
        var ws = this.root,
            len = word.length;

        for (var i = 0; i < len; i++) {
            var ch = word.charAt(i);

            if (!ws.children[ch]) {
                ws.children[ch] = new TrieNode(ch);
            }

            ws = ws.children[ch];
        }

        ws.isWord = true;
    };

    /**
     * Returns if the word is in the trie. 
     * @param {string} word
     * @return {boolean}
     */
    Trie.prototype.search = function(word) {
        var ws = this.root,
            len = word.length;

        for (var i = 0; i < len; i++) {
            var ch = word.charAt(i);

            if (!ws.children[ch]) {
                return false;
            }

            ws = ws.children[ch];
        }

        return ws.isWord;
    };

    /**
     * Returns if there is any word in the trie that starts with the given prefix. 
     * @param {string} prefix
     * @return {boolean}
     */
    Trie.prototype.startsWith = function(prefix) {
        var ws = this.root,
            len = prefix.length;

        for (var i = 0; i < len; i++) {
            var ch = prefix.charAt(i);

            if (!ws.children[ch]) {
                return false;
            }

            ws = ws.children[ch];
        }

        return true;
    };
    /**
     * @param {character[][]} board
     * @param {string[]} words
     * @return {string[]}
     */
    LeetCode.findWords = function(board, words) {
        if (!board || !words || board.length == 0 || words.length == 0) {
            return [];
        }
        // 生成trie树，用来优化
        var trie = new Trie(),
            len = words.length;
        for (var i = 0; i < len; i++) {
            trie.insert(words[i]);
        }

        // 需要记录是否已经访问过
        var rows = board.length,
            cols = board[0].length,
            visited = [],
            res = [];
            
        for (var i = 0; i < rows; i++) {
             visited[i] = [];
        }
        for (var i = 0; i < rows; i++) {
           for (var j = 0; j < cols; j++) {
                help(trie, visited, board, res, rows, cols, [], i, j);
            }
        }

        return res;
    };

    function help(trie, visited, board, res, rows, cols, strArr, i, j) {
        if (i < 0 || i > rows - 1 || j < 0 || j > cols - 1 || visited[i][j]) {
            return;
        }
        strArr.push(board[i][j]);

        var s = strArr.join('');

        visited[i][j] = true;
        if (trie.startsWith(s)) {
            if (trie.search(s) && res.indexOf(s) == -1) {
                res.push(s);
            }

            help(trie, visited, board, res, rows, cols, strArr, i - 1, j);
            help(trie, visited, board, res, rows, cols, strArr, i + 1, j);
            help(trie, visited, board, res, rows, cols, strArr, i, j - 1);
            help(trie, visited, board, res, rows, cols, strArr, i, j + 1);
        }
        strArr.pop();
        visited[i][j] = false;

    }

})(window.LeetCode = window.LeetCode || {});