/* 作者: dailc
 * 时间: 2017-06-17
 * 描述: Add-and-Search-Word-Data-structure-design
 * 
 * 来自: https://leetcode.com/problems/course-schedule-ii
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
    var WordDictionary = function() {
        this.root = new TrieNode('');
    };

    /**
     * Adds a word into the data structure. 
     * @param {string} word
     * @return {void}
     */
    WordDictionary.prototype.addWord = function(word) {
        var ws = this.root,
            len = word.length;

        for(var i = 0; i < len; i++) {
            var ch = word.charAt(i);

            if(!ws.children[ch]) {
                ws.children[ch] = new TrieNode(ch);
            }

            ws = ws.children[ch];
        }

        ws.isWord = true;
    };

    /**
     * Returns if the word is in the data structure. A word could contain the dot character '.' to represent any one letter. 
     * @param {string} word
     * @return {boolean}
     */
    WordDictionary.prototype.search = function(word) {
        var ws = this.root,
            len = word.length;
            
        var result = dfs(ws, word, len, 0);

        return !!result;
    };

    function dfs(ws, word, len, index) {
        for(var i = index; i < len; i++) {
            var ch = word.charAt(i);

            if(ch != '.') {
                if(!ws.children[ch]) {
                    return false;
                } else {
                    ws = ws.children[ch];
                }
                // console.log(ch+','+i+','+len + '，' + JSON.stringify(ws));
            } else {
                // 只要有`.`， 就进入dfs，需要遍历，而且dfs肯定是能遍历出结果的，因此判断结尾需要直接返回
                var res = false;
                
                for(var item in ws.children) {
                    if(ws.children[item]) {
                        // . 可以是任意字符-但不能是空
                        res = dfs(ws.children[item], word, len, i + 1);
                        
                        if(res) {
                            // 找到了后，没有必要继续再DFS
                            break;
                        }
                    }
                }
                
                // dfs没有找到需要返回false
                return res;
            }
        }

        if(ws.isWord) {
            
            return true;
        }
    }

    LeetCode.WordDictionary = WordDictionary;

})(window.LeetCode = window.LeetCode || {});