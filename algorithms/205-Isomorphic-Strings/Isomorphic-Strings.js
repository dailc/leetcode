/* 作者: dailc
 * 时间: 2017-06-14
 * 描述: Isomorphic-Strings
 * 
 * 来自: https://leetcode.com/problems/isomorphic-strings
 */
(function(exports) {
    /**
     * @description isIsomorphic
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    LeetCode.isIsomorphic = function(s, t) {
        if(!s && !t) {
            return true;
        }
        if(!s || !t || s.length != t.length) {
            return false;
        }
        var hashS = {},
            hashT = {},
            len = s.length;
        
        for(var i = 0; i < len; i ++) {
            var tmps = s.charAt(i);
            var tmpt = t.charAt(i);
            
            if(hashS[tmps] != hashT[tmpt]) {
                // 数量不一致
                return false;
            } else {
                // 记录位置，下次再判断时，会先判断上一次这两个的位置是否一致
                hashS[tmps] = i + 1;   
                hashT[tmpt] = i + 1;
            }
        }
        
        return true;
    };
    
    
   
    

})(window.LeetCode = window.LeetCode || {});