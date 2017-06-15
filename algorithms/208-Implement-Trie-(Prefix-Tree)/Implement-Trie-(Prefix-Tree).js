/* 作者: dailc
 * 时间: 2017-06-15
 * 描述: Course-Schedule
 * 
 * 来自: https://leetcode.com/problems/course-schedule
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
        
        for(var i = 0; i < len; i ++) {
            var ch = word.charAt(i);
            
            if(!ws.children[ch]) {
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
            
        for(var i = 0; i < len; i ++) {
            var ch = word.charAt(i);
            
            if(!ws.children[ch]) {
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
            
        for(var i = 0; i < len; i ++) {
            var ch = prefix.charAt(i);
            
            if(!ws.children[ch]) {
                return false;
            }
            
            ws = ws.children[ch];
        }
        
        return true;
    };

    LeetCode.Trie = Trie;

})(window.LeetCode = window.LeetCode || {});