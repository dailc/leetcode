/* 作者: dailc
 * 时间: 2017-09-01
 * 描述: Reverse-Vowels-of-a-String
 * 
 * 来自: https://leetcode.com/problems/reverse-vowels-of-a-string
 */
(function(exports) {
    
    var isVowel = function(ch) {
        var mp = ['a', 'e', 'i', 'o', 'u',
                  'A', 'E', 'I', 'O', 'U'];
        
        return mp.indexOf(ch) !== -1;
    };

    var reverseVowels = function(s) {
        var left = 0,
            right = s.length - 1;
            
        while (left < right) {
            var chleft = s.charAt(left),
                chright = s.charAt(right);
                
            if (isVowel(chleft) && isVowel(chright)) {                                
                
                s = s.substring(0, left) + chright
                    + s.substring(left + 1, right) + chleft
                    + s.substring(right + 1);
                    
                left ++;
                right --;
            } else if (isVowel(s.charAt(left))) {
                right--;
            } else {
                left++;
            }
        }
        
        return s;
    };
    
    exports.reverseVowels = reverseVowels;

})(window.LeetCode = window.LeetCode || {});